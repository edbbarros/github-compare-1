import { useState, useContext } from 'react';
import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayModal, { useModal } from '@clayui/modal';
import styles from './DeletionModal.module.css';
import { RepositoryContext } from '../../contexts/RepositoryContext';

function DeletionModal(props) {
  const { id, title } = props;

  const { deleteRepository } = useContext(RepositoryContext);

  const [visible, setVisible] = useState(false);
  const { observer, onClose } = useModal({
    onClose: () => {
      setVisible(false);
    },
  });

  return (
    <>
      {visible && (
        <ClayModal observer={observer} size="md" status="warning" center>
          <ClayModal.Header>Delete repository</ClayModal.Header>
          <ClayModal.Body>
            <p className={styles.confirmMsg}>
              Are you sure to delete the <span>{title}</span> repository?
            </p>
          </ClayModal.Body>
          <ClayModal.Footer
            last={
              <ClayButton.Group spaced>
                <ClayButton displayType="secondary" onClick={onClose}>
                  Cancel
                </ClayButton>

                <ClayButton
                  displayType="warning"
                  onClick={() => {
                    deleteRepository(id);
                    onClose();
                  }}
                >
                  Delete
                </ClayButton>
              </ClayButton.Group>
            }
          />
        </ClayModal>
      )}
      <ClayButton
        displayType="secondary"
        borderless
        onClick={() => {
          setVisible(true);
        }}
      >
        <ClayIcon symbol="trash" />
      </ClayButton>
    </>
  );
}

export default DeletionModal;
