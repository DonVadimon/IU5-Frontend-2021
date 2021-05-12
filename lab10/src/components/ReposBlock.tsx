/* eslint-disable no-nested-ternary */
import React, { useEffect } from "react";
import FetchStatuses from "../Redux/FetchStatuses";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { fetchRepos } from "../Redux/Repos/ReposSlice";
import Loader from "./Loader";
import RepoCard from "./RepoCard";

const ReposBlock: React.FC = () => {
  const { repos, status: reposStatus, error: reposError } = useAppSelector(
    (state) => state.repos
  );
  const { user, status: userStatus } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      userStatus === FetchStatuses.succeeded &&
      reposStatus === FetchStatuses.idle &&
      "repos_url" in user
    ) {
      dispatch(fetchRepos(user.repos_url));
    }
  }, [dispatch, reposStatus, user, userStatus]);
  return (
    <div className="repos-container">
      {reposStatus === FetchStatuses.succeeded ? (
        !reposError ? (
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
        )
      ) : (
        <div style={{ margin: "3em" }}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default ReposBlock;
