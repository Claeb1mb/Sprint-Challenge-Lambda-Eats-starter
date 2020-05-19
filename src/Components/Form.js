import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  name: yup.string(6).required("Required Field"),
  value: yup.string().required("Required Field"),
});

const Form = () => {
  const [form, setFormState] = useState({
    id: "",
    name: "",
    value: "",
  });
  const [errorState, setErrorState] = useState({
    id: "",
    name: "",
    value: "",
    type: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [post, setPost] = useState([]);
  const handleChange = (e) => {
    setFormState({ ...form, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    axios
      .post("https://reqres.in/api/users", form)
      .then((response) => {
        setPost(response.data);
        console.log("my data", response.data);
        console.log(post);
      })
      .catch((error) => console.log(error.response));

    setFormState({ ...form, [e.target.name]: e.target.value });
  };

  const validate = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    validate(e);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...form, [e.target.name]: value });
  };

  useEffect(() => {
    formSchema.isValid(form).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [form]);

  return (
    <div>
      <form onSubmit={(e) => formSubmit(e)}>
        <img
          src="https://images.unsplash.com/photo-1537734796389-e1fc293cf856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="pizza-dough"
        />
        <br></br>
        <label htmlFor="name">
          <h3>Name</h3>
          <input
            type="name"
            name={form.name}
            placeholder="enter your name here"
            onChange={(e) => handleChange(e)}
          />
          {errorState.name.length > 6 ? (
            <p className="error">{errorState}</p>
          ) : null}
        </label>
        <br></br>
        <label htmlFor="Choice of Size" />
        <h3>Choose Your Size</h3>
        <select name="size" id="size" onChange={(e) => handleChange(e)}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          Medium
          <option value="large">Large</option>
          Large
        </select>
        <label htmlFor="Choice of Sauce">
          <h3>Choice of Sauce</h3>
          <input
            name="original"
            type="radio"
            onChange={(e) => handleChange(e)}
          />
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
        <input
          name="chicken"
          type="checkbox"
          onChange={(e) => inputChange(e)}
        />
        chicken
        <input
          name="extra-cheesy"
          type="checkbox"
          onChange={(e) => handleChange(e)}
        />
        extra cheese
        <br></br>
        <label htmlFor="special-instructions" />
        <h3>special Instructions</h3>
        <input
          name="special-instructions"
          type="text"
          onChange={(e) => handleChange(e)}
        />
        <br></br>
        <label htmlFor="Add To Order" />
        <button type="submit">Add To Order</button>
      </form>
    </div>
  );
};

export default Form;
