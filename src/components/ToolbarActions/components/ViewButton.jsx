import { useContext } from 'react';
import ClayManagementToolbar from '@clayui/management-toolbar';
import ClayIcon from '@clayui/icon';
import ClayButton from '@clayui/button';
import { ClayDropDownWithItems } from '@clayui/drop-down';
import { RepositoryContext } from '../../../contexts/RepositoryContext';
import { ThemeContext } from '../../../contexts/ThemeContext';
import styles from '../ToolbarActions.module.css';

function ToolbarActions() {
  const { isDarkTheme } = useContext(ThemeContext);
  const { repositoriesView, setRepositoriesView } =
    useContext(RepositoryContext);

  const viewTypes = [
    {
      active: repositoriesView === 'cards',
      label: 'Cards',
      onClick: () => setRepositoriesView('cards'),
      symbolLeft: 'cards2',
    },
    {
      active: repositoriesView === 'list',
      label: 'List',
      onClick: () => setRepositoriesView('list'),
      symbolLeft: 'cards-full',
    },
  ];

  const viewTypeActive = viewTypes.find(type => type.active);

  return (
    <ClayManagementToolbar.Item className={styles.displayType}>
      <ClayDropDownWithItems
        items={viewTypes}
        trigger={
          <ClayButton
            className="nav-link-monospaced nav-link"
            displayType="unstyled"
          >
            <ClayIcon
              color={isDarkTheme ? '#FFF' : null}
              symbol={viewTypeActive ? viewTypeActive.symbolLeft : ''}
            />
          </ClayButton>
        }
      />
    </ClayManagementToolbar.Item>
  );
}

export default ToolbarActions;
