import React from "react";
import { Link } from "react-router-dom";
import "./book.css";

const Book = ({ book }) => {
  return (
    <div className="book-container">
      <Link to={`/books/${book.id}`} className="book-card">
        <div className="book-img">
          <img src={book.image} alt="book" />
        </div>
        <div className="book-details">
          <h3>{book.title}</h3>
          <h3>By {book.author}</h3>
          <h3>{book.read}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Book;
