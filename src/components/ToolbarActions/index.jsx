import ClayManagementToolbar from '@clayui/management-toolbar';
import MobileSearchButton from './components/MobileSearchButton';
import FavoritesButton from './components/FavoritesButton';
import ThemeButton from './components/ThemeButton';
import ViewButton from './components/ViewButton';
import NewRepositoryButtom from './components/NewRepositoryButtom';

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
