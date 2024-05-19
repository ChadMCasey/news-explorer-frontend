import { useContext } from "react";
import Modal from "../Modal/Modal";
import { ModalStateContext } from "../../context/ModalStateContext";
import "./RegistrationCompleteModal.css";

const RegistrationCompleteModal = () => {
  const { setActiveModal } = useContext(ModalStateContext);

  return (
    <Modal title="registration-complete-modal">
      <h3 className="modal__heading">Registration successfully completed!</h3>
      <button
        className="modal__teriary-link"
        onClick={() => setActiveModal("signin-modal")}
      >
        Sign In
      </button>
    </Modal>
  );
};

export default RegistrationCompleteModal;
