import PropTypes from "prop-types";
import React from "react";
import "../assets/css/OrganizationCard.css";

const OrganizationCard = React.memo(({ org }) => (
  <div className="org-card">
    <a href={`https://github.com/${org.login}`}>
      <img src={org.avatar_url} alt={org.login} className="org-logo" />
    </a>
    <div className="org-tooltip">
      <div className="logo-container">
        <img src={org.avatar_url} alt={org.login} className="org-logo" />
      </div>
      <div className="info-container">
        <h4>{org.login}</h4>
        {org.description && org.description.length !== 0 ? (
          <>
            <hr />
            <p>{org.description}</p>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  </div>
));

OrganizationCard.propTypes = {
  org: PropTypes.shape({
    avatar_url: PropTypes.string,
    description: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};

export default OrganizationCard;
