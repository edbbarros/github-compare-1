import { createContext, useMemo, useState } from 'react';
import api from '../services/api';

const initialValue = {};

export const RepositoryContext = createContext(initialValue);

export function RepositoryContextProvider({ children }) {
  const [repositories, setRepositories] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  async function addRepository(repository) {
    try {
      await api.get(repository).then(res => {
        const repositoryRes = {
          id: res.data.id,
          title: res.data.full_name,
          avatar: res.data.owner.avatar_url,
          stars: res.data.stargazers_count,
          forks: res.data.forks_count,
          openIssues: res.data.open_issues,
          age: res.data.created_at,
          lastCommit: res.data.pushed_at,
          license: res.data.license,
          language: res.data.language,
          isFavorite: false,
        };
        const newRepositoriesArray = [repositoryRes, ...repositories];
        setRepositories(newRepositoriesArray);
        setErrorMsg(null);
      });
    } catch (e) {
      console.log(e);
      setErrorMsg(e.message);
    }
  }

  function deleteRepository(id) {
    const repositoryToDelete = repositories.indexOf(
      repositories.find(el => el.id === id),
    );
    const newRepositoriesArray = repositories;
    newRepositoriesArray.splice(repositoryToDelete, 1);
    setRepositories([...newRepositoriesArray]);
  }

  const value = useMemo(
    () => ({
      repositories,
      setRepositories,
      addRepository,
      errorMsg,
      deleteRepository,
    }),
    [repositories, setRepositories, addRepository, errorMsg, deleteRepository],
  );

  return (
    <RepositoryContext.Provider value={value}>
      {children}
    </RepositoryContext.Provider>
  );
}
