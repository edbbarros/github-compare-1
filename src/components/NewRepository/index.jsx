import { useState } from 'react';
import ClayButton, { ClayButtonWithIcon } from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayCard from '@clayui/card';
import ClayForm, { ClayInput } from '@clayui/form';
import ClayAlert from '@clayui/alert';
import styles from './NewRepository.module.css';

function NewRepository() {
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
            <ClayInput id="basicInputText" type="text" />
            <ClayAlert
              displayType="danger"
              title="This is an API-feedback-error"
              variant="feedback"
            />
          </ClayForm.Group>
        </ClayCard.Body>
      </ClayCard>
      <div className={styles.newRepositoryHeaderActions}>
        <ClayButton displayType="secondary" onClick={() => setOpen(false)}>
          Cancel
        </ClayButton>
        <ClayButton>Add</ClayButton>
      </div>
    </ClayDropDown>
  );
}

export default NewRepository;
