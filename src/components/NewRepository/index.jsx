import { useState, useContext } from 'react';
import ClayButton, { ClayButtonWithIcon } from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayCard from '@clayui/card';
import ClayForm, { ClayInput } from '@clayui/form';
import ClayAlert from '@clayui/alert';
import { RepositoryContext } from '../../contexts/RepositoryContext';
import styles from './NewRepository.module.css';

function NewRepository() {
  const { addRepository, errorMsg, setErrorMsg } =
    useContext(RepositoryContext);

  const [repository, setRepository] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <ClayDropDown
      trigger={
        <ClayButtonWithIcon
          className="nav-btn nav-btn-monospaced"
          symbol="plus"
        />
      }
      active={open}
      onActiveChange={setOpen}
      menuWidth="sm"
      menuElementAttrs={{
        className: 'my-custom-dropdown-menu',
        containerProps: {
          className: 'dropdown-menu-react-portal-div',
          id: 'dropdownMenuReactPortalDiv',
        },
      }}
    >
      <ClayCard>
        <ClayCard.Body>
          <ClayCard.Description
            className={styles.newRepositoryHeader}
            displayType="title"
          >
            New Repository
          </ClayCard.Description>
          <ClayForm.Group>
            <label htmlFor="basicInputText">
              Repository <span className={styles.required}>*</span>
            </label>
            <ClayInput
              id="basicInputText"
              type="text"
              onChange={e => {
                setRepository(e.target.value);
                setErrorMsg(null);
              }}
            />
            {errorMsg && (
              <ClayAlert
                displayType="danger"
                title={errorMsg}
                variant="feedback"
              />
            )}
          </ClayForm.Group>
        </ClayCard.Body>
      </ClayCard>
      <div className={styles.newRepositoryHeaderActions}>
        <ClayButton displayType="secondary" onClick={() => setOpen(false)}>
          Cancel
        </ClayButton>
        <ClayButton
          onClick={() => {
            addRepository(repository);
          }}
          disabled={errorMsg}
        >
          Add
        </ClayButton>
      </div>
    </ClayDropDown>
  );
}

export default NewRepository;
