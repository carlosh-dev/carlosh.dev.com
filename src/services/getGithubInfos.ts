interface GithubProps {
  avatar_url: string;
}

export default async function getGithubInfos(): Promise<GithubProps> {
  const res = await fetch('https://api.github.com/user', {
    headers: {
      Accept: 'Accept: application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return await res.json();
}
