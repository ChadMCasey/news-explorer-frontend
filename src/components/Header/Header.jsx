import "./Header.css";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Header = ({ children }) => {
  const page = useLocation().pathname;

  return (
    <header className="header">
      {page === "/" ? (
        <Navigation page="/" />
      ) : (
        <Navigation page="saved-news" />
      )}

      {children}
    </header>
  );
};

export default Header;
