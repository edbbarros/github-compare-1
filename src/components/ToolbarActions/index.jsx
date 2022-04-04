import { useContext } from 'react';
import ClayManagementToolbar from '@clayui/management-toolbar';
import ClayIcon from '@clayui/icon';
import ClayButton from '@clayui/button';
import { ClayDropDownWithItems } from '@clayui/drop-down';
import NewRepository from '../NewRepository';
import { RepositoryContext } from '../../contexts/RepositoryContext';

function ToolbarActions() {
  const {
    repositoriesView,
    setRepositoriesView,
    filterFavoriteRepositories,
    filterOperationType,
    setFilterOperationType,
  } = useContext(RepositoryContext);

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

  function setSearchMobile(value) {
    console.log(value);
  }

  return (
    <ClayManagementToolbar.ItemList>
      <ClayManagementToolbar.Item className="navbar-breakpoint-d-none">
        <ClayButton
          className="nav-link nav-link-monospaced"
          displayType="unstyled"
          onClick={() => setSearchMobile(true)}
        >
          <ClayIcon symbol="search" />
        </ClayButton>
      </ClayManagementToolbar.Item>

      <ClayManagementToolbar.Item>
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
            <ClayIcon symbol="star" />
          ) : (
            <ClayIcon symbol="star-o" />
          )}
        </ClayButton>
      </ClayManagementToolbar.Item>

      <ClayManagementToolbar.Item>
        <ClayButton
          className="nav-link nav-link-monospaced"
          displayType="unstyled"
          onClick={() => {}}
        >
          <ClayIcon symbol="adjust" />
        </ClayButton>
      </ClayManagementToolbar.Item>

      <ClayManagementToolbar.Item>
        <ClayDropDownWithItems
          items={viewTypes}
          trigger={
            <ClayButton
              className="nav-link-monospaced nav-link"
              displayType="unstyled"
            >
              <ClayIcon
                symbol={viewTypeActive ? viewTypeActive.symbolLeft : ''}
              />
            </ClayButton>
          }
        />
      </ClayManagementToolbar.Item>

      <NewRepository />
    </ClayManagementToolbar.ItemList>
  );
}

export default ToolbarActions;
