import ClayEmptyState from '@clayui/empty-state';
import ClayButton from '@clayui/button';
import emptyState from '../../assets/empty-state.svg';

function EmptyState(props) {
  const { isSearch } = props;

  return (
    <ClayEmptyState
      description={
        isSearch
          ? 'No results were found that matched'
          : 'Add some repositories by clicking add new repository'
      }
      imgProps={{ alt: 'No data' }}
      imgSrc={emptyState}
      title={isSearch ? 'Something went wrong!' : 'There is still nothing here'}
    >
      {isSearch && (
        <ClayButton displayType="secondary">Clear Filter</ClayButton>
      )}
    </ClayEmptyState>
  );
}

export default EmptyState;
