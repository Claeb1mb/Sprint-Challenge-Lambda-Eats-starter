import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Link } from "react-router-dom";

import AddOrder from "./Components/AddOrder";
import AtForm from "./Components/AtForm";
import CosForm from "./Components/CosForm";
import CoSizeForm from "./Components/CoSizeForm";

const Form = () => {
  return (
    <form>
      <CoSizeForm />
      <CosForm />
      <AtForm />
      <AddOrder />
    </form>
  );
};

export default Form;
