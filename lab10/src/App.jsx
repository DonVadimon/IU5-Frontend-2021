import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import UserPage from "./components/UserPage";
import NotFoundPage from "./components/NotFoundPage";
import "./assets/css/App.css";

const App = () => (
  <div className="App">
    <BrowserRouter basename={process.env.REACT_APP_LAB10_BUILD_PATH}>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route path="/404" component={NotFoundPage} />
        <Route path="/user/:username" component={UserPage} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
