import { useContext } from 'react';
import EmptyState from '../../components/EmptyState';
import Card from '../../components/Repository/Card';
import List from '../../components/Repository/List';
import styles from './Content.module.css';
import { RepositoryContext } from '../../contexts/RepositoryContext';
import { ThemeContext } from '../../contexts/ThemeContext';

function Content() {
  const { isDarkTheme } = useContext(ThemeContext);

  const {
    repositories,
    repositoriesView,
    searchResults,
    filterOperationType,
    favoritesResults,
  } = useContext(RepositoryContext);

  let data = [];
  switch (filterOperationType) {
    case 'search':
      data = searchResults;
      break;
    case 'favorites':
      data = favoritesResults;
      break;
    default:
      data = repositories;
  }

  if (!data.length) {
    return (
      <div
        className={
          isDarkTheme
            ? styles.emptyStateContainerDark
            : styles.emptyStateContainer
        }
      >
        {filterOperationType === 'search' ? (
          <EmptyState isSearch />
        ) : (
          <EmptyState />
        )}
      </div>
    );
  }

  return (
    <main
      className={
        isDarkTheme ? styles.contentContainerDark : styles.contentContainer
      }
    >
      {repositoriesView === 'cards' ? (
        <div className={styles.cardContainer}>
          {data.map(el => (
            <Card
              key={el.id}
              id={el.id}
              title={el.title}
              avatar={el.avatar}
              stars={el.stars}
              forks={el.forks}
              openIssues={el.openIssues}
              age={el.age}
              lastCommit={el.lastCommit}
              license={el.license}
              language={el.language}
              isFavorite={el.isFavorite}
            />
          ))}
        </div>
      ) : (
        <div className={styles.listContainer}>
          {data.map(el => (
            <List
              key={el.id}
              id={el.id}
              title={el.title}
              avatar={el.avatar}
              stars={el.stars}
              forks={el.forks}
              openIssues={el.openIssues}
              age={el.age}
              lastCommit={el.lastCommit}
              license={el.license}
              language={el.language}
              isFavorite={el.isFavorite}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Content;
