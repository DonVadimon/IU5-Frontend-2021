import React, { useState, useEffect } from "react";
import { withRouter, useParams, useHistory } from "react-router-dom";
import Loader from "./Loader";
import RepoCard from "./RepoCard";
import ViewGitHubBtn from "./ViewGitHubBtn";
import socialLink from "../assets/icons/social-link.svg";
import mapPointer from "../assets/icons/geo-pointer.svg";
import people from "../assets/icons/people.svg";
import circle from "../assets/icons/circle-fill.svg";
import "../assets/css/UserPage.css";

const UserPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (username.trim().length !== 0) {
      fetch(`https://api.github.com/users/${username}`, {
        Authorization: `Token ${process.env.RECT_APP_API_KEY}`,
      })
        .then((response) => response.json())
        .then((data) => {
          if ("message" in data) {
            history.push("/404");
          }
          setUser(data);
        });
    }
  }, [history, username]);

  useEffect(() => {
    if ("repos_url" in user) {
      fetch(user.repos_url)
        .then((response) => response.json())
        .then((data) => setRepos(data));
    }
  }, [user]);

  return "login" in user ? (
    <div className="user-page-conatainer">
      <div className="personal-info">
        <div className="user-avatar">
          <img src={user.avatar_url} alt={user.login} />
        </div>
        <div className="user-names user-info-item">
          <h1>{user.login}</h1>
          <h2>{user.name}</h2>
        </div>
        <div className="user-follows user-info-item">
          <img src={people} alt="People" />
          <h4>{user.followers} followers</h4>
          <img className="dot" src={circle} alt="#" />
          <h4>{user.following} following</h4>
        </div>
        {user.location ? (
          <div className="user-location user-info-item">
            <img src={mapPointer} alt="Poiner" />
            <h4>{user.location}</h4>
          </div>
        ) : (
          <></>
        )}
        {user.blog ? (
          <div className="user-socials user-info-item">
            <h4>
              <img src={socialLink} alt="Social" />
              <a href={user.blog}>{user.blog}</a>
            </h4>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="right-side-wrapper">
        <div className="repos-container">
          {repos.length !== 0 ? (
            repos.map((repo, idx) =>
              idx < 10 ? (
                <div className="repo-wrapper">
                  <RepoCard repo={repo} />
                </div>
              ) : (
                <></>
              )
            )
          ) : (
            <></>
          )}
        </div>
        <ViewGitHubBtn url={user.html_url} />
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default withRouter(UserPage);
