import React from "react";

const CosForm = () => {
  return (
    <form>
      <label htmlFor="Choice of Sauce" />
      <h3>Choice of Sauce</h3>
      <ul>
        <li>
          <input type="radio" value="original" />
          original
        </li>
        <li>
          <input type="radio" />
          bbq
        </li>
        <li>
          <input type="radio" />
          Garlic Ranch
        </li>
      </ul>
    </form>
  );
};

export default CosForm;
