import { useContext } from 'react';
import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import DeletionModal from '../../DeletionModal';
import { RepositoryContext } from '../../../contexts/RepositoryContext';
import styles from '../Repository.module.css';

function Header(props) {
  const { repositoriesView, id, title, avatar, isFavorite } = props;

  const { addRepositoryToFavorites, removeRepositoryFromFavorites } =
    useContext(RepositoryContext);

  return (
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
  );
}

export default Header;
