import { useState, useContext } from 'react';
import ClayIcon from '@clayui/icon';
import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import { RepositoryContext } from '../../contexts/RepositoryContext';

function Filter() {
  const { sortRepositories } = useContext(RepositoryContext);

  const [active, setActive] = useState(false);

  return (
    <ClayDropDown
      trigger={
        <ClayButton className="nav-link" displayType="unstyled">
          <span className="navbar-breakpoint-down-d-none">
            <span className="navbar-text-truncate">Filter and order</span>

            <ClayIcon
              className="inline-item inline-item-after"
              symbol="caret-bottom"
            />
          </span>
          <span className="navbar-breakpoint-d-none">
            <ClayIcon symbol="filter" />
          </span>
        </ClayButton>
      }
      active={active}
      onActiveChange={setActive}
      menuElementAttrs={{
        className: 'my-custom-dropdown-menu',
        containerProps: {
          className: 'dropdown-menu-react-portal-div',
          id: 'dropdownMenuReactPortalDiv',
        },
      }}
    >
      <ClayDropDown.ItemList>
        <ClayDropDown.Group header="Order by">
          {[
            { label: 'Stars', value: 'stars' },
            { label: 'Forks', value: 'forks' },
            { label: 'Open Issues', value: 'openIssues' },
            { label: 'Age', value: 'age' },
            { label: 'Last commit', value: 'lastCommit' },
          ].map((item, i) => (
            <ClayDropDown.Item
              onClick={() => sortRepositories(item.value)}
              key={i}
            >
              {item.label}
            </ClayDropDown.Item>
          ))}
        </ClayDropDown.Group>
      </ClayDropDown.ItemList>
    </ClayDropDown>
  );
}

export default Filter;
