/* eslint-disable no-nested-ternary */
import React, { useEffect } from "react";
import FetchStatuses from "../Redux/FetchStatuses";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { fetchOrgs } from "../Redux/Orgs/OrgsSlice";
import Loader from "./Loader";
import OrganizationCard from "./OrganizationCard";

const OrganizationsBlock: React.FC = () => {
  const { orgs, status: orgsStatus, error: orgsError } = useAppSelector(
    (state) => state.orgs
  );
  const { user, status: userStatus } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      userStatus === FetchStatuses.succeeded &&
      orgsStatus === FetchStatuses.idle &&
      "organizations_url" in user
    ) {
      dispatch(fetchOrgs(user.organizations_url));
    }
  }, [dispatch, orgsStatus, user, userStatus]);
  return (
    <div className="orgs-container">
      {orgsStatus === FetchStatuses.succeeded ? (
        !orgsError ? (
          orgs.map((org) => <OrganizationCard org={org} />)
        ) : (
          <></>
        )
      ) : (
        <Loader small />
      )}
    </div>
  );
};

export default OrganizationsBlock;
