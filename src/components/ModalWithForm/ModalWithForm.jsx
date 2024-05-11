import React, { useContext } from "react";
import { ModalStateContext } from "../../context/ModalStateContext";
import Modal from "../Modal/Modal";
import "./ModalWithForm.css";

const ModalWithForm = ({ children, title, handleSubmit }) => {
  return (
    <Modal title={title}>
      <form className="modal__form form" onSubmit={handleSubmit} noValidate>
        {children}
      </form>
    </Modal>
  );
};

export default ModalWithForm;
