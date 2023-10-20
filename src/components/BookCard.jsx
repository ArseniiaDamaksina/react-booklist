import { useState } from "react";

import { Rating } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./BookCard.css";
import Modal from "../components/Modal.jsx";

const BookCard = ({
  title,
  id,
  author,
  imgSrc,
  onToReadClick,
  onReadClick,
  toRead,
  read,
  languages,
  subjects,
  onClick,
  currentFilter,
  rating,
  onRatingClick,
}) => {
  const [modalActive, setModalActive] = useState(false);
  const [ratingNumber, setRatingNumber] = useState(0);

  const handleReset = () => {
    setRatingNumber(0);
  };

  return (
    <div className="bookCardContainer">
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="closeIconDiv">
          <FontAwesomeIcon
            icon={faXmark}
            style={{ color: "#B61515", fontSize: "16px" }}
            onClick={() => {
              setModalActive(false);
            }}
          />
        </div>
        <div className="modalWindow">
          <img src={imgSrc} alt={title} />
          <div className="modalContent">
            <h3>
              <span style={{ color: "#B61515" }}>Title: </span>
              {title}
            </h3>
            <h4>
              <span style={{ color: "#B61515" }}>Author: </span>
              {author}
            </h4>
            <h4>
              <span style={{ color: "#B61515" }}>Languages: </span>
              {languages}
            </h4>
            <h4>
              <span style={{ color: "#B61515" }}>Subjects: </span>
            </h4>
            <ul>
              {subjects.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </div>
        </div>
      </Modal>
      <img
        src={imgSrc}
        alt={title}
        onClick={() => {
          setModalActive(true);
        }}
      />
      <div className="titleDiv">
        <h3>{title}</h3>
      </div>
      <h5>{author}</h5>
      {read ? (
        <div className="ratingContainer">
          <Rating
            name="simple-controlled"
            value={ratingNumber}
            size="small"
            onChange={(event, newValue) => {
              setRatingNumber(newValue);
              onRatingClick(id, newValue);
            }}
          />
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="buttonsDiv">
        <button
          onClick={() => onToReadClick(id)}
          style={{
            backgroundColor: toRead ? "#B61515" : "white",
            color: toRead ? "white" : "black",
          }}
        >
          {toRead ? "To Read ✓" : "To Read"}
        </button>
        <button
          onClick={() => onReadClick(id)}
          style={{
            backgroundColor: read ? "#B61515" : "white",
            color: read ? "white" : "black",
          }}
        >
          {read ? "Read ✓" : "Read"}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
