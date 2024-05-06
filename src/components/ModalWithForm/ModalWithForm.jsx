import React, { useContext } from "react";
import { ModalStateContext } from "../../context/ModalStateContext";

const ModalWithForm = ({ children, title, handleSubmit }) => {
  const { activeModal, setActiveModal } = useContext(ModalStateContext);

  const modalOpened = activeModal === title;

  const modalContainerClose = (e) =>
    e.target === e.currentTarget && setActiveModal("");

  const modalCloseIconClose = () => setActiveModal("");

  return (
    <div className={`modal ${modalOpened}`} onClick={modalContainerClose}>
      <div className="modal__container">
        <form className="modal__form form" onSubmit={handleSubmit}>
          {children}
          <button
            className="modal__close"
            onClick={modalCloseIconClose}
          ></button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
