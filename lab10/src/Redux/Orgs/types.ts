import FetchStatuses from "../FetchStatuses";

export interface IGitOrg {
  login: string;
  avatar_url: string;
  description: string | null;
}

export interface IGitOrgsSlice {
  orgs: IGitOrg[];
  status: FetchStatuses;
  error: string | undefined;
}

export interface INoOrgsError {
  message: string;
}
