import PropTypes from "prop-types";
import React from "react";
import "../assets/css/ViewGitHubBtn.css";

const ViewGitHubBtn = React.memo(({ url }) => (
  <div className="view-github-btn-container">
    <a href={url}>
      <button className="view-github-btn" type="button">
        View GitHub
      </button>
    </a>
  </div>
));

ViewGitHubBtn.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ViewGitHubBtn;
