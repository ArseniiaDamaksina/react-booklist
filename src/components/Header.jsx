import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onClick }) => {
  return (
    <div className="headerContainer">
      <div className="emptyHeader"></div>
      <header>
        <div className="appName" onClick={onClick}>
          <span>Booklists</span>
          <FontAwesomeIcon icon={faBook} style={{ color: "#ffffff", fontSize: "44px" }} />
        </div>
        <span onClick={onClick}>Read Baby Read!</span>
      </header>
    </div>
  );
};

export default Header;
