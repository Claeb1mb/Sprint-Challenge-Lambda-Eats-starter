import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  name: yup.string().required("Required Field"),
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

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const inputChange = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  return (
    <form>
      <label htmlFor="Choice of Size">Choose Your Size</label>
      <select name="size" id="size" onChange={inputChange}>
        <option value="small" />
        <option value="medium" />
        <option value="large" />
      </select>
      <label htmlFor="Choice of Sauce" />
      <h3>Choice of Sauce</h3>
      <input name="original" type="radio" value="original" />
      <input name="bbq" value="bbq" type="radio" />
      <input name="garlic-ranch" value="garlic-ranch" type="radio" />
      <label htmlFor="Add Toppings" />
      <h3>Add Toppings</h3>
      <input name="pepperoni" type="checkbox" checked={true} />
      <input name="vegan-beef" type="checkbox" checked={true} />
      <input name="chicken" type="checkbox" checked={true} />
      <input name="extra-cheesy" type="checkbox" checked={true} />

      <br></br>
      <label htmlFor="Submit" />
      <h3>Special Instructions</h3>
      <input type="text" placeholder="Special Instructions" />
      <button>Submit</button>
    </form>
  );
};

export default Form;
