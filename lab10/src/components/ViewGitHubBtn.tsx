import React from "react";
import "../assets/css/ViewGitHubBtn.css";

const ViewGitHubBtn = React.memo(({ url }: { url: string }) => (
  <div className="view-github-btn-container">
    <a href={url}>
      <button className="view-github-btn" type="button">
        View GitHub
      </button>
    </a>
  </div>
));

export default ViewGitHubBtn;
