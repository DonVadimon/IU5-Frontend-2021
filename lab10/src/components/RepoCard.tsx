import React from "react";
import { IGitRepo } from "../Redux/Repos/types";
import chooseIconSrc from "../tools/chooseIconSrc";
import roundToK from "../tools/roundToK";
import gitStar from "../assets/icons/git-star.svg";
import gitFork from "../assets/icons/git-fork.svg";
import terminal from "../assets/icons/terminal.svg";
import repoIcon from "../assets/icons/repo.svg";
import "../assets/css/RepoCard.css";

const RepoCard: React.FC<{ repo: IGitRepo }> = React.memo(
  ({ repo }: { repo: IGitRepo }) => (
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
          <div>{roundToK(repo.stargazers_count)}</div>
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
  )
);

export default RepoCard;
