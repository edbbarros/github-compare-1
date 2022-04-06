import { useState, useContext } from 'react';
import ClayIcon from '@clayui/icon';
import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import { RepositoryContext } from '../../contexts/RepositoryContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './Filter.module.css';

function Filter() {
  const { isDarkTheme } = useContext(ThemeContext);
  const { sortRepositories } = useContext(RepositoryContext);

  const [active, setActive] = useState(false);

  const labels = [
    { label: 'Stars', value: 'stars' },
    { label: 'Forks', value: 'forks' },
    { label: 'Open Issues', value: 'openIssues' },
    { label: 'Age', value: 'age' },
    { label: 'Last commit', value: 'lastCommit' },
  ];

  return (
    <ClayDropDown
      className={isDarkTheme ? styles.dropdownDark : styles.dropdown}
      trigger={
        <ClayButton className="nav-link" displayType="unstyled">
          <span className="navbar-breakpoint-down-d-none">
            <span className="navbar-text-truncate">Filter and order</span>
            <ClayIcon
              className="inline-item inline-item-after"
              symbol="caret-bottom"
            />
          </span>
        </ClayButton>
      }
      active={active}
      onActiveChange={setActive}
    >
      <ClayDropDown.ItemList>
        <ClayDropDown.Group header="Order by">
          {labels.map((item, i) => (
            <ClayDropDown.Item
              key={i}
              onClick={() => sortRepositories(item.value)}
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
