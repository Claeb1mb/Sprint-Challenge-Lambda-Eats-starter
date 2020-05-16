import React from "react";
import Form from "./Form.js";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./Components/Home";

const App = () => {
  return (
    <div>
      <nav>
        <h1>Caleb's Famous Pizza</h1>
        <h2>Cyo Pizza</h2>
      </nav>
      <Route>
        <Home />
      </Route>

      <Form />
    </div>
  );
};
export default App;
