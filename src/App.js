import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Form from "./Components/Form";
import Pizza from "./Components/Pizza";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="./Components/Form">Cyo Pizza</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact to="./Components/Form">
          <Form />
        </Route>
        <Route to="./Components/Pizza">
          <Pizza />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
