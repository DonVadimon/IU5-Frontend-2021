import FetchStatuses from "../FetchStatuses";

export interface IGitUser {
  login: string;
  name: string;
  location: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  blog: string;
  repos_url: string;
  public_repos: number;
  organizations_url: string;
}

export interface IGitUserSlice {
  user: IGitUser;
  status: FetchStatuses;
  error: string | undefined;
}

export interface INoUserError {
  message: string;
}
