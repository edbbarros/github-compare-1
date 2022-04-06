import ClayManagementToolbar from '@clayui/management-toolbar';
import githubLogo from '../../assets/github-logo.svg';
import Filter from '../../components/Filter';
import ToolbarActions from '../../components/ToolbarActions';
import Search from '../../components/Search';
import styles from './Toolbar.module.css';

function Toolbar() {
  return (
    <ClayManagementToolbar className={styles.toolbar}>
      <img className={styles.logo} src={githubLogo} alt="GitHub Logo" />
      Github Compare
      <Filter />
      <Search />
      <ToolbarActions />
    </ClayManagementToolbar>
  );
}

export default Toolbar;
