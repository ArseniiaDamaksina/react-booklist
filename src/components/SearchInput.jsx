import "./SearchInput.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SearchInput = ({ placeholder, value, onChange, onIconClick }) => {
  return (
    <div className="searchInput">
      <div className="inputContainer">
        <input
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faXmark}
          style={{ color: "#B61515", fontSize: "16px" }}
          onClick={() => onIconClick("")}
        />
      </div>
    </div>
  );
};

export default SearchInput;
