import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import UserPage from "./components/UserPage";
import NotFoundPage from "./components/NotFoundPage";
import "./assets/css/App.css";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SearchPage />
        </Route>
        <Route path="/404">
          <NotFoundPage />
        </Route>
        <Route path="/user/:username">
          <UserPage />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
