import EmptyState from '../../components/EmptyState';
import Card from '../../components/Repository/Card';
import List from '../../components/Repository/List';
import styles from './Content.module.css';

function Content() {
  const showCards = true;
  const dataLength = [{}];

  if (!dataLength.length) {
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      ) : (
        <div className={styles.listContainer}>
          <List />
          <List />
          <List />
          <List />
        </div>
      )}
    </div>
  );
}

export default Content;
