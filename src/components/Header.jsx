import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onClick }) => {
  return (
    <div className="headerContainer">
      <header>
        <div className="appName" onClick={onClick}>
          <span>Boklists</span>
          <FontAwesomeIcon icon={faBook} style={{ color: "#ffffff", fontSize: "28px" }} />
        </div>
        <span onClick={onClick}>Read Baby Read!</span>
      </header>
    </div>
  );
};

export default Header;
