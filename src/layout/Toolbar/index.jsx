import { useContext } from 'react';
import ClayManagementToolbar from '@clayui/management-toolbar';
import githubLogo from '../../assets/github-logo.svg';
import Filter from '../../components/Filter';
import ToolbarActions from '../../components/ToolbarActions';
import Search from '../../components/Search';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './Toolbar.module.css';

function Toolbar() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <ClayManagementToolbar
      className={isDarkTheme ? styles.toolbarDark : styles.toolbar}
    >
      <img className={styles.logo} src={githubLogo} alt="GitHub Logo" />
      Github Compare
      <Filter />
      <Search />
      <ToolbarActions />
    </ClayManagementToolbar>
  );
}

export default Toolbar;
