import Modal from "../Modal/Modal";
import "./EmptySearchModal.css";

const EmptySearchModal = () => {
  return (
    <Modal title="empty-search-modal">
      <h3 className="modal__heading">Please enter a keyword</h3>
    </Modal>
  );
};

export default EmptySearchModal;
