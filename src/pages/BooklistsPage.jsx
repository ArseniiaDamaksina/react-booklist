import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownAZ, faStar } from "@fortawesome/free-solid-svg-icons";

import "./BooklistsPage.css";
import BookCard from "../components/BookCard.jsx";
import Sidebar from "../components/Sidebar.jsx";
import SearchInput from "../components/SearchInput.jsx";
import Header from "../components/Header.jsx";
import cutTitle from "../utils/cutTitle.js";
import formatAuthorName from "../utils/formatAuthorName.js";


const BooklistsPage = () => {
  const apiUrl = "https://gutendex.com/books/";

  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [titleSearch, setTitleSearch] = useState("");
  const [authorSearch, setAuthorSearch] = useState("");
  const [sortClicked, setSortClicked] = useState(false);
  const [ratingClicked, setRatingClicked] = useState(false);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const initialBooks = data.results.map((book, id) => ({
          ...book,
          id,
          toRead: false,
          read: false,
          title: cutTitle(book.title),
          rating: 0,
        }));
        console.log(initialBooks);
        setBooks(initialBooks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const handleToReadClick = (id) => {
    const updatedBooks = filteredBooks.map((book) => {
      if (book.id === id) {
        return { ...book, toRead: !book.toRead, read: false };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const handleReadClick = (id) => {
    const updatedBooks = filteredBooks.map((book) => {
      if (book.id === id) {
        return { ...book, read: !book.read, toRead: false };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const handleRatingClick = (id, newRating) => {
    const updatedBooks = filteredBooks.map((book) => {
      if (book.id === id) {
        return { ...book, rating: newRating };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const filterBooks = () => {
    let tempBooks = [...books];

    if (titleSearch) {
      tempBooks = tempBooks.filter((book) =>
        book.title.toLowerCase().includes(titleSearch.toLowerCase())
      );
    }

    if (authorSearch) {
      tempBooks = tempBooks.filter((book) =>
        book.authors.some((author) =>
          author.name.toLowerCase().includes(authorSearch.toLowerCase())
        )
      );
    }

    if (sortClicked) {
      const sorted = tempBooks.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }

    if (ratingClicked) {
      tempBooks.sort((a, b) => b.rating - a.rating);
    }

    if (currentFilter === "toRead") {
      return tempBooks.filter((book) => book.toRead);
    } else if (currentFilter === "read") {
      return tempBooks.filter((book) => book.read);
    } else {
      return tempBooks;
    }
  };

  return (
    <div className="mainContainer">
      <Header onClick={handleNavigate} />
      <div className="filtersContainer">
        <div className="empty"></div>
        <div className="filtersNav">
          <div className="inputsContainer">
            <div className="searchContainer">
              <SearchInput
                placeholder="Type a title"
                value={titleSearch}
                onChange={setTitleSearch}
                onIconClick={setTitleSearch}
              />
            </div>
            <div className="searchContainer">
              <SearchInput
                placeholder="Type an author"
                value={authorSearch}
                onChange={setAuthorSearch}
                onIconClick={setAuthorSearch}
              />
            </div>
          </div>
          <div className="sortingContainer">
            <FontAwesomeIcon
              icon={faArrowDownAZ}
              style={sortClicked ? { color: "black" } : { color: "#b10d02" }}
              onClick={() => {
                setSortClicked(!sortClicked);
              }}
            />
            <FontAwesomeIcon
              icon={faStar}
              style={ratingClicked ? { color: "black" } : { color: "#b10d02" }}
              onClick={() => {
                setRatingClicked(!ratingClicked);
                console.log(ratingClicked);
              }}
            />
          </div>
        </div>
      </div>
      <div className="content">
        <Sidebar
          className="sidebar"
          currentFilter={currentFilter}
          onFilterClick={(filter) => setCurrentFilter(filter)}
        />
        <div className="booksContainer">
          {filterBooks().map((book) => (
            <BookCard
              currentFilter={currentFilter}
              key={book.id}
              id={book.id}
              title={book.title}
              author={formatAuthorName(book.authors[0]?.name)}
              imgSrc={book.formats["image/jpeg"]}
              onToReadClick={handleToReadClick}
              onReadClick={handleReadClick}
              toRead={book.toRead}
              read={book.read}
              rating={book.rating}
              onRatingClick={handleRatingClick}
              languages={book.languages}
              subjects={book.subjects}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooklistsPage;
