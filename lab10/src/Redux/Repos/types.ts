import FetchStatuses from "../FetchStatuses";

export interface IGitRepo {
  html_url: string;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

export interface IGitRepoSlice {
  repos: IGitRepo[];
  status: FetchStatuses;
  error: string | undefined;
}

export interface INoReposError {
  message: string;
}
