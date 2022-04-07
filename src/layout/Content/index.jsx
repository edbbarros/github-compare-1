import { useContext } from 'react';
import EmptyState from '../../components/EmptyState';
import Repository from '../../components/Repository';
import { RepositoryContext } from '../../contexts/RepositoryContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './Content.module.css';

function Content() {
  const { isDarkTheme } = useContext(ThemeContext);
  const {
    repositories,
    repositoriesView,
    searchResults,
    filterOperationType,
    favoritesResults,
  } = useContext(RepositoryContext);

  // choosing the data to be displayed according to the filter operation type
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

  // in case there are no repositories display an empty state component
  if (!data.length) {
    return (
      <main
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
      </main>
    );
  }

  return (
    <main
      className={
        isDarkTheme ? styles.contentContainerDark : styles.contentContainer
      }
    >
      <div
        className={
          repositoriesView === 'cards'
            ? styles.cardContainer
            : styles.listContainer
        }
      >
        {data.map(el => (
          <Repository
            repositoriesView={repositoriesView}
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
    </main>
  );
}

export default Content;
