import "./Modal.css";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={`modalContainer ${active ? "active" : ""}`}
      onClick={() => setActive(false)}
    >
      <div
        className={`modalContent ${active ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;