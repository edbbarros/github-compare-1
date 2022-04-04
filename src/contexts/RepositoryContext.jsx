import { createContext, useMemo, useState } from 'react';
import api from '../services/api';
import { MOCK_DATA } from '../MOCK_DATA';

const initialValue = {};

export const RepositoryContext = createContext(initialValue);

export function RepositoryContextProvider({ children }) {
  const [repositories, setRepositories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [favoritesResults, setFavoritesResults] = useState([]);
  const [filterOperationType, setFilterOperationType] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [repositoriesView, setRepositoriesView] = useState('cards');

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

  function addRepositoryToFavorites(id) {
    const repositoryToFav = repositories.findIndex(el => el.id === id);
    const newRepositoriesArray = repositories;
    newRepositoriesArray[repositoryToFav].isFavorite = true;
    setRepositories([...newRepositoriesArray]);
  }

  function removeRepositoryFromFavorites(id) {
    const repositoryToFav = repositories.findIndex(el => el.id === id);
    const newRepositoriesArray = repositories;
    newRepositoriesArray[repositoryToFav].isFavorite = false;
    setRepositories([...newRepositoriesArray]);
  }

  function filterFavoriteRepositories() {
    const newRepositoriesArray = repositories;
    const favorites = newRepositoriesArray.filter(el => el.isFavorite === true);
    setFavoritesResults([...favorites]);
  }

  function sortRepositories(property) {
    const newRepositoriesArray = repositories;
    newRepositoriesArray.sort((a, b) => {
      const keyA = a[property];
      const keyB = b[property];
      if (keyA < keyB) {
        return 1;
      }
      if (keyA > keyB) {
        return -1;
      }
      return 0;
    });
    setRepositories([...newRepositoriesArray]);
  }

  function filterRepository(searchQuery) {
    const newRepositoriesArray = repositories;
    const query = new RegExp(searchQuery, 'i');
    const search = newRepositoriesArray.filter(el => el.title.match(query));
    setSearchResults([...search]);
  }

  const value = useMemo(
    () => ({
      repositories,
      setRepositories,
      addRepository,
      errorMsg,
      setErrorMsg,
      deleteRepository,
      addRepositoryToFavorites,
      removeRepositoryFromFavorites,
      filterFavoriteRepositories,
      favoritesResults,
      setFavoritesResults,
      repositoriesView,
      setRepositoriesView,
      sortRepositories,
      filterRepository,
      searchResults,
      setSearchResults,
      filterOperationType,
      setFilterOperationType,
      searchString,
      setSearchString,
    }),
    [
      repositories,
      setRepositories,
      addRepository,
      errorMsg,
      setErrorMsg,
      deleteRepository,
      addRepositoryToFavorites,
      removeRepositoryFromFavorites,
      filterFavoriteRepositories,
      favoritesResults,
      setFavoritesResults,
      repositoriesView,
      setRepositoriesView,
      sortRepositories,
      filterRepository,
      searchResults,
      setSearchResults,
      filterOperationType,
      setFilterOperationType,
      searchString,
      setSearchString,
    ],
  );

  return (
    <RepositoryContext.Provider value={value}>
      {children}
    </RepositoryContext.Provider>
  );
}
