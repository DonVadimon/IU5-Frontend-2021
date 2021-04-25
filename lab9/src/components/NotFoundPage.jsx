import React from "react";
import { withRouter, Link } from "react-router-dom";
import "../assets/css/NotFoundPage.css";

const NotFoundPage = () => (
  <div className="not-found-container">
    <h1>User not found</h1>
    <div>
      <Link to="/">
        <h2>Back to Search</h2>
      </Link>
    </div>
  </div>
);

export default withRouter(NotFoundPage);
