import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./SignoutButton.css";
import { IsLoggedInContext } from "../../context/IsLoggedInContext";
import { UserDataContext } from "../../context/UserDataContext";

const SignoutButton = ({ page }) => {
  const { handleSignOut } = useContext(IsLoggedInContext);
  const userData = useContext(UserDataContext);
  const navigate = useNavigate();

  function signOutButtonClick() {
    handleSignOut();
    navigate("/", { replace: true });
  }

  return (
    <button
      className={`nav__link ${page} nav__link_type_logout`}
      onClick={signOutButtonClick}
    >
      <span className="nav__user-name">
        {userData ? userData.name.split(" ")[0] : ""}
      </span>
      <span className="nav__logout-icon"></span>
    </button>
  );
};

export default SignoutButton;
