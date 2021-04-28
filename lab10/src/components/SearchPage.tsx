import React, { useRef, useEffect } from "react";
import { withRouter, useHistory, useRouteMatch } from "react-router-dom";
import { useAppDispatch } from "../Redux/hooks";
import { clearUser } from "../Redux/User/UserSlice";
import { clearRepos } from "../Redux/Repos/ReposSlice";
import { clearOrgs } from "../Redux/Orgs/OrgsSlice";
import removeEndSlashIfContains from "../tools/removeEndSlashIfContains";
import "../assets/css/SearchPage.css";

const SearchPage: React.FC = React.memo(() => {
  const inputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const url = removeEndSlashIfContains(useRouteMatch().url);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearUser());
    dispatch(clearRepos());
    dispatch(clearOrgs());
  }, [dispatch]);

  const handleSearch = () => {
    if (
      inputRef.current !== null &&
      inputRef.current.value.trim().length !== 0
    ) {
      history.push(`${url}/user/${inputRef.current.value}`);
    }
  };

  return (
    <div className="search-form">
      <div className="input-btn-wrapper">
        <input
          type="text"
          className="search-input"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          ref={inputRef}
          onKeyPress={(e) => {
            if (e.key.toLowerCase() === "enter") {
              handleSearch();
            }
          }}
        />
        <button type="button" className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
});

export default withRouter(SearchPage);
