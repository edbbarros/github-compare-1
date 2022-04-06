import { useState, useContext } from 'react';
import ClayButton, { ClayButtonWithIcon } from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayForm, { ClayInput } from '@clayui/form';
import ClayAlert from '@clayui/alert';
import { RepositoryContext } from '../../../contexts/RepositoryContext';
import styles from '../ToolbarActions.module.css';

function NewRepositoryButtom() {
  const { addRepository, errorMsg, setErrorMsg, setFilterOperationType } =
    useContext(RepositoryContext);

  const [repository, setRepository] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <ClayDropDown
      menuWidth="sm"
      trigger={
        <ClayButtonWithIcon
          className="nav-btn nav-btn-monospaced"
          symbol="plus"
        />
      }
      active={open}
      onActiveChange={setOpen}
    >
      <div className={styles.newRepositoryHeader}>
        New repository
        <ClayForm.Group className={styles.newRepositoryForm}>
          <label htmlFor="basicInputText">
            Repository <span className={styles.required}>*</span>
          </label>
          <ClayInput
            id="basicInputText"
            type="text"
            value={repository}
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
      </div>
      <div className={styles.newRepositoryHeaderActions}>
        <ClayButton
          displayType="secondary"
          onClick={() => {
            setOpen(false);
            setRepository('');
          }}
        >
          Cancel
        </ClayButton>
        <ClayButton
          onClick={() => {
            addRepository(repository);
            setFilterOperationType('');
            setRepository('');
          }}
          disabled={errorMsg}
        >
          Add
        </ClayButton>
      </div>
    </ClayDropDown>
  );
}

export default NewRepositoryButtom;
