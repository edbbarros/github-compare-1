import { useContext } from 'react';
import ClayButton from '@clayui/button';
import ClayCard from '@clayui/card';
import ClayLabel from '@clayui/label';
import ClayIcon from '@clayui/icon';
import DeletionModal from '../../DeletionModal';
import { RepositoryContext } from '../../../contexts/RepositoryContext';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { formatTime } from '../../../utils';
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

  const { isDarkTheme } = useContext(ThemeContext);

  const { addRepositoryToFavorites, removeRepositoryFromFavorites } =
    useContext(RepositoryContext);

  return (
    <ClayCard key={id} className={isDarkTheme ? styles.listDark : null}>
      <div className={styles.listHeader}>
        <div className={styles.repositoryInfo}>
          <img src={avatar} alt="Avatar" />
          {title}
        </div>
        <div className={styles.repositoryActions}>
          <ClayButton
            displayType="secondary"
            borderless
            onClick={() => {
              if (isFavorite) {
                removeRepositoryFromFavorites(id);
              } else {
                addRepositoryToFavorites(id);
              }
            }}
          >
            {isFavorite ? (
              <ClayIcon symbol="star" />
            ) : (
              <ClayIcon symbol="star-o" />
            )}
          </ClayButton>
          <DeletionModal title={title} id={id} />
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
          Age <span>{formatTime(age)}</span>
        </p>
        <p>
          Last commit <span>{formatTime(lastCommit)}</span>
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
