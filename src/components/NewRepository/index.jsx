import { useState } from 'react';
import ClayButton, { ClayButtonWithIcon } from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayCard from '@clayui/card';
import ClayForm, { ClayInput } from '@clayui/form';
import ClayAlert from '@clayui/alert';

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
        <ClayCard.Body style={{ paddingBottom: '31px' }}>
          <ClayCard.Description
            style={{ fontSize: '18px', margin: '16px 0px' }}
            displayType="title"
          >
            New Repository
          </ClayCard.Description>
          <ClayForm.Group>
            <label htmlFor="basicInputText">
              Repository <span style={{ color: '#B95000' }}>*</span>
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'right',
          padding: '16px',
          marginRight: '8px',
        }}
      >
        <ClayButton
          style={{ marginRight: '16px' }}
          displayType="secondary"
          onClick={() => setOpen(false)}
        >
          Cancel
        </ClayButton>
        <ClayButton>Add</ClayButton>
      </div>
    </ClayDropDown>
  );
}

export default NewRepository;
