import React, { useState, useEffect } from "react";
import { withRouter, useParams, useHistory } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../Redux/hooks";
import { fetchUser, clearUser } from "../Redux/User/UserSlice";
import FetchStatuses from "../Redux/FetchStatuses";
import Loader from "./Loader";
import RepoCard from "./RepoCard";
import OrganizationCard from "./OrganizationCard";
import ViewGitHubBtn from "./ViewGitHubBtn";
import chooseIconSrc from "../tools/chooseIconSrc";
import GITHUBAPIHEADERS from "./GITHUBAPIHEADERS";
import socialLink from "../assets/icons/social-link.svg";
import mapPointer from "../assets/icons/geo-pointer.svg";
import people from "../assets/icons/people.svg";
import circle from "../assets/icons/circle-fill.svg";
import "../assets/css/UserPage.css";

const UserPage = React.memo(() => {
  const { username } = useParams<{ username: string }>();
  const [repos, setRepos] = useState([]);
  const [orgs, setOrgs] = useState([]);
  const history = useHistory();

  const dispatch = useAppDispatch();
  const { user, status, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (status === FetchStatuses.idle && username.trim().length !== 0) {
      dispatch(fetchUser(username));
    }
    if (error) {
      dispatch(clearUser());
      history.push("/404");
    }
  }, [dispatch, error, history, status, username]);

  useEffect(() => {
    if ("repos_url" in user) {
      fetch(user.repos_url, { method: "GET", headers: GITHUBAPIHEADERS })
        .then((response) => response.json())
        .then((data) => setRepos(data))
        .catch(() => setRepos([]));
    }
  }, [user]);

  useEffect(() => {
    if ("organizations_url" in user) {
      fetch(user.organizations_url, {
        method: "GET",
        headers: GITHUBAPIHEADERS,
      })
        .then((response) => response.json())
        .then((data) => setOrgs(data))
        .catch(() => setOrgs([]));
    }
  }, [user]);

  return status === FetchStatuses.succeeded ? (
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
          <img src={chooseIconSrc(people)} alt="People" />
          <h4>{user.followers} followers</h4>
          <img className="dot" src={chooseIconSrc(circle)} alt="#" />
          <h4>{user.following} following</h4>
        </div>
        {user.location ? (
          <div className="user-location user-info-item">
            <img src={chooseIconSrc(mapPointer)} alt="Poiner" />
            <h4>{user.location}</h4>
          </div>
        ) : (
          <></>
        )}
        {user.blog ? (
          <div className="user-socials user-info-item">
            <h4>
              <img src={chooseIconSrc(socialLink)} alt="Social" />
              <a href={user.blog}>{user.blog}</a>
            </h4>
          </div>
        ) : (
          <></>
        )}

        {orgs.length !== 0 ? (
          <div className="user-info-item">
            <h2>Organizations</h2>
            <div className="orgs-container">
              {orgs.map((org) => (
                <OrganizationCard org={org} />
              ))}
            </div>
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
});

export default withRouter(UserPage);
