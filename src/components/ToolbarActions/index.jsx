import ClayManagementToolbar from '@clayui/management-toolbar';
import NewRepositoryButtom from './components/NewRepositoryButtom';
import MobileSearchButton from './components/MobileSearchButton';
import FavoritesButton from './components/FavoritesButton';
import ThemeButton from './components/ThemeButton';
import ViewButton from './components/ViewButton';

function ToolbarActions() {
  return (
    <ClayManagementToolbar.ItemList>
      <MobileSearchButton />
      <FavoritesButton />
      <ThemeButton />
      <ViewButton />
      <NewRepositoryButtom />
    </ClayManagementToolbar.ItemList>
  );
}

export default ToolbarActions;
