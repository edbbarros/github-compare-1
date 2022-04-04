import ClayButton from '@clayui/button';
import ClayCard from '@clayui/card';
import ClayLabel from '@clayui/label';
import ClayIcon from '@clayui/icon';
import styles from './List.module.css';

function List(props) {
  const {
    id,
    title,
    avatar,
    stars,
    forks,
    openIssues,
    age,
    lastCommit,
    license,
    language,
    isFavorite,
  } = props;

  return (
    <ClayCard key={id}>
      <div className={styles.listHeader}>
        <div className={styles.repoInfo}>
          <img src={avatar} alt="Avatar" />
          {title}
        </div>
        <div className={styles.options}>
          <ClayButton
            displayType="secondary"
            borderless
            onClick={() => {
              console.log('add to favorites');
            }}
          >
            {isFavorite ? (
              <ClayIcon symbol="star" />
            ) : (
              <ClayIcon symbol="star-o" />
            )}
          </ClayButton>
          <ClayButton
            displayType="secondary"
            borderless
            onClick={() => {
              console.log('open deletion modal');
            }}
          >
            <ClayIcon symbol="trash" />
          </ClayButton>
        </div>
      </div>

      <div className={styles.listBody}>
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
          Age <span>{age}</span>
        </p>
        <p>
          Last commit <span>{lastCommit}</span>
        </p>
        <p>
          License <span>{license?.name || 'N/A'}</span>
        </p>
      </div>
      <ClayLabel key={id} className={styles.label} displayType="warning" large>
        {language}
      </ClayLabel>
    </ClayCard>
  );
}

export default List;
