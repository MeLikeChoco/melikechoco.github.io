export type GithubRepoResponse = {
    name: string;
    description: string;
    languages_url: string;
    stargazers_count: number;
    updated_at: string;
    commits_url: string;
};

export type GithubRepoLanguagesResponse = {
    [language: string]: number;
};

export type GithubRepoCommit = {
    sha: string;
}

export type GithubRepo = {
    name: string;
    description: string;
    languages: GithubRepoLanguages;
    libs: string[];
    stargazersCount: number;
    updatedAt: Date;
    repoUrl: string;
    downloadUrl: string;
    stargazersUrl: string;
    latestCommitUrl: string | null;
};

export type GithubRepoLanguages = {
    [language: string]: number;
}