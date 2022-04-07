import { useContext } from 'react';
import ClayManagementToolbar from '@clayui/management-toolbar';
import ClayIcon from '@clayui/icon';
import ClayButton from '@clayui/button';
import { RepositoryContext } from '../../../contexts/RepositoryContext';
import { ThemeContext } from '../../../contexts/ThemeContext';
import styles from '../ToolbarActions.module.css';

function ToolbarActions() {
  const { isDarkTheme } = useContext(ThemeContext);
  const {
    filterFavoriteRepositories,
    filterOperationType,
    setFilterOperationType,
  } = useContext(RepositoryContext);

  return (
    <ClayManagementToolbar.Item className={styles.favorites}>
      <ClayButton
        className="nav-link nav-link-monospaced"
        displayType="unstyled"
        onClick={() => {
          if (filterOperationType === 'favorites') {
            setFilterOperationType('');
          } else {
            setFilterOperationType('favorites');
            filterFavoriteRepositories();
          }
        }}
      >
        {filterOperationType === 'favorites' ? (
          <ClayIcon color={isDarkTheme ? '#FFF' : null} symbol="star" />
        ) : (
          <ClayIcon color={isDarkTheme ? '#FFF' : null} symbol="star-o" />
        )}
      </ClayButton>
    </ClayManagementToolbar.Item>
  );
}

export default ToolbarActions;
