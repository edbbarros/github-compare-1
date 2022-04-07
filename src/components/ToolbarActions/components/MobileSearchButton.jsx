import { useContext } from 'react';
import ClayManagementToolbar from '@clayui/management-toolbar';
import ClayIcon from '@clayui/icon';
import ClayButton from '@clayui/button';
import { RepositoryContext } from '../../../contexts/RepositoryContext';
import { ThemeContext } from '../../../contexts/ThemeContext';

function MobileSearchButton() {
  const { isDarkTheme } = useContext(ThemeContext);

  const { setSearchMobile } = useContext(RepositoryContext);

  return (
    <ClayManagementToolbar.Item className="navbar-breakpoint-d-none">
      <ClayButton
        className="nav-link nav-link-monospaced"
        displayType="unstyled"
        onClick={() => {
          setSearchMobile(true);
        }}
      >
        <ClayIcon color={isDarkTheme ? '#FFF' : null} symbol="search" />
      </ClayButton>
    </ClayManagementToolbar.Item>
  );
}

export default MobileSearchButton;
