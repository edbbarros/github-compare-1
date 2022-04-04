import ClayButton from '@clayui/button';
import ClayCard from '@clayui/card';
import ClayLabel from '@clayui/label';
import ClayIcon from '@clayui/icon';
import styles from './List.module.css';

function List() {
  const isFavorite = false;

  return (
    <ClayCard>
      <div className={styles.listHeader}>
        <div className={styles.repoInfo}>
          <img
            src="https://avatars.githubusercontent.com/u/131436?s=200&v=4"
            alt="Avatar"
          />
          phmachado/github-compare
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
          Stars <span>150</span>
        </p>
        <p>
          Forks <span>442</span>
        </p>
        <p>
          Open Issues <span>0</span>
        </p>
        <p>
          Age <span>11 years ago</span>
        </p>
        <p>
          Last commit <span>7 hours ago</span>
        </p>
        <p>
          License <span>N/A</span>
        </p>
      </div>
      <ClayLabel className={styles.label} displayType="warning" large>
        JavaScript
      </ClayLabel>
    </ClayCard>
  );
}

export default List;
