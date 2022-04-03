import ClayManagementToolbar from '@clayui/management-toolbar';
import ClayIcon from '@clayui/icon';
import ClayButton from '@clayui/button';
import { ClayDropDownWithItems } from '@clayui/drop-down';
import NewRepository from '../NewRepository';

function ToolbarActions() {
  const viewTypes = [
    {
      active: true,
      label: 'Cards',
      onClick: () => console.log('Show view card'),
      symbolLeft: 'cards2',
    },
    {
      label: 'List',
      onClick: () => console.log('Show view list'),
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
          onClick={() => {}}
        >
          <ClayIcon symbol="star-o" />
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
