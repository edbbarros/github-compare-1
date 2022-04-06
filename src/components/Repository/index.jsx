import { useContext } from 'react';
import ClayButton from '@clayui/button';
import ClayCard from '@clayui/card';
import ClayLabel from '@clayui/label';
import ClayIcon from '@clayui/icon';
import DeletionModal from '../DeletionModal';
import { RepositoryContext } from '../../contexts/RepositoryContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { formatTime } from '../../utils';
import styles from './Repository.module.css';

function Repository(props) {
  const {
    repositoriesView,
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
    <ClayCard
      key={id}
      className={
        repositoriesView === 'cards'
          ? isDarkTheme
            ? styles.cardDark
            : styles.card
          : isDarkTheme
          ? styles.listDark
          : null
      }
    >
      {/* repository header */}
      <div
        className={
          repositoriesView === 'cards' ? styles.cardHeader : styles.listHeader
        }
      >
        <div
          className={
            repositoriesView === 'cards'
              ? styles.cardRepositoryInfo
              : styles.listRepositoryInfo
          }
        >
          <img src={avatar} alt="Avatar" />
          {title}
        </div>
        <div
          className={
            repositoriesView === 'cards'
              ? styles.cardRepositoryActions
              : styles.listRepositoryActions
          }
        >
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

      {/* repository body */}
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

      {/* language label) */}
      <ClayLabel
        key={id}
        className={
          repositoriesView === 'cards' ? styles.cardLabel : styles.listLabel
        }
        displayType="warning"
        large
      >
        {language}
      </ClayLabel>
    </ClayCard>
  );
}

export default Repository;
