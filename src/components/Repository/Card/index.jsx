import { useState } from 'react';
import ClayButton from '@clayui/button';
import ClayCard from '@clayui/card';
import ClayLabel from '@clayui/label';
import ClayIcon from '@clayui/icon';
import DeletionModal from '../../DeletionModal';
import styles from './Card.module.css';

function Card() {
  const [visible, setVisible] = useState(false);
  const isFavorite = false;

  return (
    <ClayCard className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.repoInfo}>
          <img
            src="https://avatars.githubusercontent.com/u/131436?s=200&v=4"
            alt="Avatar"
          />
          phmachado/github-compare
        </div>
        <div className={styles.actions}>
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
              setVisible(true);
            }}
          >
            <ClayIcon symbol="trash" />
          </ClayButton>
          <DeletionModal visible={visible} setVisible={setVisible} />
        </div>
      </div>

      <ClayCard.Body className={styles.cardBody}>
        <ClayCard.Description tag="div">
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
          <ClayLabel className={styles.label} displayType="warning" large>
            JavaScript
          </ClayLabel>
        </ClayCard.Description>
      </ClayCard.Body>
    </ClayCard>
  );
}

export default Card;
