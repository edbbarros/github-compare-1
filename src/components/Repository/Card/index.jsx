import { useContext } from 'react';
import ClayButton from '@clayui/button';
import ClayCard from '@clayui/card';
import ClayLabel from '@clayui/label';
import ClayIcon from '@clayui/icon';
import DeletionModal from '../../DeletionModal';
import styles from './Card.module.css';
import { RepositoryContext } from '../../../contexts/RepositoryContext';

function Card(props) {
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

  const { addRepositoryToFavorites, removeRepositoryFromFavorites } =
    useContext(RepositoryContext);

  return (
    <ClayCard key={id} className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.repoInfo}>
          <img src={avatar} alt="Avatar" />
          {title}
        </div>
        <div className={styles.actions}>
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

      <ClayCard.Body className={styles.cardBody}>
        <ClayCard.Description tag="div">
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
          <ClayLabel
            key={id}
            className={styles.label}
            displayType="warning"
            large
          >
            {language}
          </ClayLabel>
        </ClayCard.Description>
      </ClayCard.Body>
    </ClayCard>
  );
}

export default Card;
