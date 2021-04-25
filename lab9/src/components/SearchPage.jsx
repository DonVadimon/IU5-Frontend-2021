import React, { useRef } from "react";
import { withRouter, useHistory } from "react-router-dom";
import "../assets/css/SearchPage.css";

const SearchPage = () => {
  const inputRef = useRef(null);
  const history = useHistory();

  const handleSearch = () => {
    if (inputRef.current.value.trim().length !== 0) {
      history.push(`/user/${inputRef.current.value}`);
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
};

export default withRouter(SearchPage);
