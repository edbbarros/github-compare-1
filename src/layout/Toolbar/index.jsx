import ClayManagementToolbar from '@clayui/management-toolbar';
import githubLogo from '../../assets/github-logo.svg';
import Filter from '../../components/Filter';
import ToolbarActions from '../../components/ToolbarActions';
import Search from '../../components/Search';

function Toolbar() {
  return (
    <ClayManagementToolbar>
      <img style={{ marginRight: '20px' }} src={githubLogo} alt="GitHub Logo" />
      Github Compare
      <Filter />
      <Search />
      <ToolbarActions />
    </ClayManagementToolbar>
  );
}

export default Toolbar;
