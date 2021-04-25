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
        <Route
          exact
          path={process.env.REACT_APP_DEV === "true" ? "/" : "/lab9/build/"}
          component={SearchPage}
        />
        <Route
          path={
            process.env.REACT_APP_DEV === "true" ? "/404" : "/lab9/build/404"
          }
          component={NotFoundPage}
        />
        <Route
          path={
            process.env.REACT_APP_DEV === "true"
              ? "/user/:username"
              : "/lab9/build/user/:username"
          }
          component={UserPage}
        />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
