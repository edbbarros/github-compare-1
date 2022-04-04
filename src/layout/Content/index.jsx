import { useContext } from 'react';
import EmptyState from '../../components/EmptyState';
import Card from '../../components/Repository/Card';
import List from '../../components/Repository/List';
import styles from './Content.module.css';
import { RepositoryContext } from '../../contexts/RepositoryContext';

function Content() {
  const { repositories } = useContext(RepositoryContext);

  const showCards = false;

  if (!repositories.length) {
    return (
      <div className={styles.emptyStateContainer}>
        <EmptyState />
      </div>
    );
  }

  return (
    <div className={styles.contentContainer}>
      {showCards ? (
        <div className={styles.cardContainer}>
          {repositories.map(el => (
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
          {repositories.map(el => (
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
    </div>
  );
}

export default Content;
