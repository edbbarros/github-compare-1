import { formatTime } from '../../../utils';
import styles from '../Repository.module.css';

function Body(props) {
  const {
    repositoriesView,
    stars,
    forks,
    openIssues,
    age,
    lastCommit,
    license,
  } = props;

  return (
    <div
      className={
        repositoriesView === 'cards' ? styles.cardBody : styles.listBody
      }
    >
      <p>
        Stars <span>{stars}</span>
      </p>
      <p>
        Forks <span>{forks}</span>
      </p>
      <p>
        Open Issues <span>{openIssues}</span>
      </p>
      <p>
        Age <span>{formatTime(age)}</span>
      </p>
      <p>
        Last commit <span>{formatTime(lastCommit)}</span>
      </p>
      <p>
        License <span>{license?.name || 'N/A'}</span>
      </p>
    </div>
  );
}

export default Body;
