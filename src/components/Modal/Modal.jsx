import { useContext } from "react";
import { ModalStateContext } from "../../context/ModalStateContext";
import "./Modal.css";

const Modal = ({ title, children }) => {
  const { activeModal, closeModal } = useContext(ModalStateContext);

  const modalOpened = activeModal === title ? "modal_opened" : "";
  const modalContainerOpened = modalOpened ? "modal__container_opened" : "";

  const modalContainerClose = (e) =>
    e.target === e.currentTarget && closeModal();

  return (
    <div
      className={`modal ${modalOpened} modal_type_${title}`}
      onClick={modalContainerClose}
    >
      <div className={`modal__container ${modalContainerOpened}`}>
        {children}
        <button className="modal__close" onClick={closeModal}></button>
      </div>
    </div>
  );
};

export default Modal;
