import React from "react";
import PropTypes from "prop-types";
import chooseIconSrc from "../tools/chooseIconSrc";
import roundToK from "../tools/roundToK";
import gitStar from "../assets/icons/git-star.svg";
import gitFork from "../assets/icons/git-fork.svg";
import terminal from "../assets/icons/terminal.svg";
import repoIcon from "../assets/icons/repo.svg";
import "../assets/css/RepoCard.css";

const RepoCard = React.memo(({ repo }) => (
  <div className="repo-card">
    <div className="repo-name">
      <img className="repo-icon" src={chooseIconSrc(repoIcon)} alt="Repo" />
      <a href={repo.html_url}>{repo.name}</a>
    </div>
    <div className="repo-description">{repo.description}</div>
    <div className="repo-info">
      <div className="repo-info-block">
        <img
          className="repo-info-icon"
          src={chooseIconSrc(terminal)}
          alt="Language:"
        />
        <div>{repo.language}</div>
      </div>
      <div className="repo-info-block">
        <img
          className="repo-info-icon"
          src={chooseIconSrc(gitStar)}
          alt="Stars:"
        />
        <div>
          {repo.stargazers_count > 1000
            ? `${repo.stargazers_count % 1000}k`
            : repo.stargazers_count}
        </div>
      </div>
      <div className="repo-info-block">
        <img
          className="repo-info-icon"
          src={chooseIconSrc(gitFork)}
          alt="Forks:"
        />
        <div>{roundToK(repo.forks_count)}</div>
      </div>
    </div>
  </div>
));

RepoCard.propTypes = {
  repo: PropTypes.shape({
    description: PropTypes.string,
    forks_count: PropTypes.number,
    html_url: PropTypes.string,
    language: PropTypes.string,
    name: PropTypes.string,
    stargazers_count: PropTypes.number,
  }).isRequired,
};

export default RepoCard;
