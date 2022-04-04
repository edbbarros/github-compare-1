import ClayButton from '@clayui/button';
import ClayModal, { useModal } from '@clayui/modal';
import styles from './DeletionModal.module.css';

function DeletionModal(props) {
  const { visible, setVisible } = props;

  const { observer, onClose } = useModal({
    onClose: () => setVisible(false),
  });

  return (
    <>
      {visible && (
        <ClayModal observer={observer} size="md" status="warning" center>
          <ClayModal.Header>Delete repository</ClayModal.Header>
          <ClayModal.Body>
            <p className={styles.confirmMsg}>
              Are you sure to delete the <span>liferay/senna.js</span>{' '}
              repository?
            </p>
          </ClayModal.Body>
          <ClayModal.Footer
            last={
              <ClayButton.Group spaced>
                <ClayButton displayType="secondary" onClick={onClose}>
                  Cancel
                </ClayButton>
                <ClayButton displayType="warning" onClick={onClose}>
                  Delete
                </ClayButton>
              </ClayButton.Group>
            }
          />
        </ClayModal>
      )}
    </>
  );
}

export default DeletionModal;
