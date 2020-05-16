import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  name: yup.string().required("Required Field"),
  type: yup.string(15).required("Required Field"),
});

const Form = () => {
  const [formState, setFormState] = useState({
    id: "",
    name: "",
    value: "",
    type: "",
  });
  const [errorState, setErrorState] = useState({
    id: "",
    name: "",
    value: "",
    type: "",
  });
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formState.name);
    console.log(formState.value);
    setFormState({ name: "", value: "" });
  };

  const inputChange = (e) => {
    e.persist();
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
  };

  return (
    <form onSubmit={formSubmit}>
      <img
        src="https://images.unsplash.com/photo-1537734796389-e1fc293cf856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="pizza-dough"
      />
      <label htmlFor="Choice of Size">Choose Your Size</label>
      <select name="size" id="size" onChange={(e) => handleChange(e)}>
        <option value="small" />
        <option value="medium" />
        <option value="large" />
      </select>
      <label htmlFor="Choice of Sauce">
        <h3>Choice of Sauce</h3>
        <input name="original" type="radio" onChange={(e) => handleChange(e)} />
        original
        <input name="bbq" type="radio" onChange={(e) => handleChange(e)} />
        bbq
        <input
          name="garlic-ranch"
          type="radio"
          onChange={(e) => handleChange(e)}
        />
        garlic ranch
      </label>
      <label htmlFor="Add Toppings" />
      <h3>Add Toppings</h3>
      <input
        name="pepperoni"
        type="checkbox"
        onChange={(e) => inputChange(e)}
      />
      pepperoni
      <input
        name="vegan-beef"
        type="checkbox"
        onChange={(e) => inputChange(e)}
      />
      vegan beef
      <input name="chicken" type="checkbox" onChange={(e) => inputChange(e)} />
      chicken
      <input
        name="extra-cheesy"
        type="checkbox"
        onChange={(e) => handleChange(e)}
      />
      extra cheese
      <br></br>
      <label htmlFor="special-instructions" />
      <h3>Special Instructions</h3>
      <input type="text" placeholder="Special Instructions" />
      <br></br>
      <label htmlFor="Add To Order" />
      <button>Add To Order</button>
    </form>
  );
};

export default Form;
