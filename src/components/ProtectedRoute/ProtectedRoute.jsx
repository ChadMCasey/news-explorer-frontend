import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { IsLoggedInContext } from "../../context/IsLoggedInContext";
import { ModalStateContext } from "../../context/ModalStateContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(IsLoggedInContext);
  const { setActiveModal } = useContext(ModalStateContext);

  if (isLoggedIn) {
    return children;
  }

  // set signup modal when unauth user
  // gets redirected to homepage after /saved-news endpoint attempt
  // when not logged in.
  setTimeout(() => setActiveModal("signup-modal"), 0);
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
