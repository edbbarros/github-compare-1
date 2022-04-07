import { useContext } from 'react';
import ClayManagementToolbar from '@clayui/management-toolbar';
import { ClayInput } from '@clayui/form';
import ClayIcon from '@clayui/icon';
import { ClayButtonWithIcon } from '@clayui/button';
import { RepositoryContext } from '../../contexts/RepositoryContext';
import styles from './Search.module.css';

function Search() {
  const {
    filterRepository,
    setFilterOperationType,
    searchString,
    setSearchString,
    searchMobile,
    setSearchMobile,
  } = useContext(RepositoryContext);

  return (
    <ClayManagementToolbar.Search showMobile={searchMobile}>
      <ClayInput.Group>
        <ClayInput.GroupItem>
          <ClayInput
            aria-label="Search"
            className="form-control input-group-inset input-group-inset-after"
            placeholder="Search"
            type="text"
            value={searchString}
            onChange={e => {
              setFilterOperationType('search');
              filterRepository(e.target.value);
              setSearchString(e.target.value);
            }}
          />
          <ClayInput.GroupInsetItem after tag="span">
            <ClayButtonWithIcon
              className="navbar-breakpoint-d-none"
              displayType="unstyled"
              onClick={() => setSearchMobile(false)}
              symbol="times"
            />
            <ClayIcon className={styles.searchIcon} symbol="search" />
          </ClayInput.GroupInsetItem>
        </ClayInput.GroupItem>
      </ClayInput.Group>
    </ClayManagementToolbar.Search>
  );
}

export default Search;
