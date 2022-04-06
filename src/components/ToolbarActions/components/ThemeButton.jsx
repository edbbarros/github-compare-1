import { useContext } from 'react';
import ClayManagementToolbar from '@clayui/management-toolbar';
import ClayIcon from '@clayui/icon';
import ClayButton from '@clayui/button';
import { ThemeContext } from '../../../contexts/ThemeContext';

function ToolbarActions() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  return (
    <ClayManagementToolbar.Item>
      <ClayButton
        className="nav-link nav-link-monospaced"
        displayType="unstyled"
        onClick={() => {
          setIsDarkTheme(!isDarkTheme);
        }}
      >
        <ClayIcon color={isDarkTheme ? '#FFF' : null} symbol="adjust" />
      </ClayButton>
    </ClayManagementToolbar.Item>
  );
}

export default ToolbarActions;
