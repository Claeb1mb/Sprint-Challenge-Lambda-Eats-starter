import React from "react";

const AtForm = () => {
  return (
    <form>
      {" "}
      <label htmlFor="Add Toppings" />
      <h3>Add Toppings</h3>
      <ul>
        <li>
          <input type="checkbox" />
          pepperoni
        </li>
        <li>
          <input type="checkbox" />
          Vegan Beef Crumbles
        </li>
        <li>
          <input type="checkbox" />
          Chicken
        </li>
        <li>
          <input type="checkbox" />
          Extra Cheese
        </li>
      </ul>
    </form>
  );
};

export default AtForm;
