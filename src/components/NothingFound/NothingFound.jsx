import "./NothingFound.css";
import NothingFoundMagnifier from "../../assets/not-found.svg";

const NothingFound = () => {
  return (
    <div className="nothing-found">
      <img
        src={NothingFoundMagnifier}
        alt="A magnifying glass icon"
        className="nothing-found__magnifier"
      />
      <h3 className="nothing-found__heading">Nothing Found</h3>
      <p className="nothing-found__subheading">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
};

export default NothingFound;
