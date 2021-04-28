/* eslint-disable no-nested-ternary */
import React, { useEffect } from "react";
import { withRouter, useParams, useHistory } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../Redux/hooks";
import { fetchUser } from "../Redux/User/UserSlice";
import FetchStatuses from "../Redux/FetchStatuses";
import Loader from "./Loader";
import ViewGitHubBtn from "./ViewGitHubBtn";
import chooseIconSrc from "../tools/chooseIconSrc";
import socialLink from "../assets/icons/social-link.svg";
import mapPointer from "../assets/icons/geo-pointer.svg";
import people from "../assets/icons/people.svg";
import circle from "../assets/icons/circle-fill.svg";
import "../assets/css/UserPage.css";
import OrganizationsBlock from "./OrganizationsBlock";
import ReposBlock from "./ReposBlock";

const UserPage = React.memo(() => {
  const { username } = useParams<{ username: string }>();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { user, status: userStatus, error: userError } = useAppSelector(
    (state) => state.user
  );
  const { length: orgsLength } = useAppSelector((state) => state.orgs.orgs);

  useEffect(() => {
    if (userStatus === FetchStatuses.idle && username.trim().length !== 0) {
      dispatch(fetchUser(username));
    }
    if (userError) {
      history.push("/404");
    }
  }, [dispatch, history, userError, userStatus, username]);

  return userStatus === FetchStatuses.succeeded ? (
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

        <div className="user-info-item">
          {orgsLength !== 0 ? <h2>Organizations</h2> : <></>}
          <OrganizationsBlock />
        </div>
      </div>
      <div className="right-side-wrapper">
        <ReposBlock />
        <ViewGitHubBtn url={user.html_url} />
      </div>
    </div>
  ) : (
    <Loader />
  );
});

export default withRouter(UserPage);
