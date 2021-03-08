import { useState } from 'react';

export function useGithubUser(username) {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [repos, setRepos] = useState();

  const getUser = async username => {
    setUser(undefined);
    setError(undefined);
    setRepos(undefined);

    try {
      await fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
          if (data.message && data.message === 'Not Found') {
            setError('User not found');
            return;
          }
          setUser(data);
        });
    } catch (err) {
      setError('Something went wrong, please try again');
    }

    await fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(data => !data.message && setRepos(data));
  };

  return {
    user,
    repos,
    error,
    getUser,
  };
}
