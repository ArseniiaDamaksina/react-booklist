import "./Sidebar.css";

const Sidebar = ({ currentFilter, onFilterClick }) => {
  return (
    <div className="sidebarContainer">
      <ul>
        <li
          onClick={() => onFilterClick("all")}
          style={
            currentFilter === "all"
              ? { backgroundColor: "#B61515", color: "white" }
              : null
          }
        >
          All Books
        </li>
        <li
          onClick={() => onFilterClick("toRead")}
          style={
            currentFilter === "toRead"
              ? { backgroundColor: "#B61515", color: "white" }
              : null
          }
        >
          To Read
        </li>
        <li
          onClick={() => onFilterClick("read")}
          style={
            currentFilter === "read"
              ? { backgroundColor: "#B61515", color: "white" }
              : null
          }
        >
          Read
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
