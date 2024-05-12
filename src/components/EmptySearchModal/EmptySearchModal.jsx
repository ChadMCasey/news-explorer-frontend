import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import { ModalStateContext } from "../../context/ModalStateContext";
import "./EmptySearchModal.css";

const EmptySearchModal = () => {
  const { setActiveModal } = useContext(ModalStateContext);

  return (
    <Modal title="empty-search-modal">
      <h3 className="modal__heading">Please enter a keyword</h3>
    </Modal>
  );
};

export default EmptySearchModal;
