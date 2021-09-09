import React from "react";
import { Link } from "react-router-dom";

const SingleBook = ({ match, books, edit, deleteBook }) => {
  const id = parseInt(match.params.id);
  const book = books.find((book) => book.id === id);

  return (
    <div className="book-page">
      <div className="page-image">
        <img src={book.image} alt="Book" />
      </div>
      <div className="page-details">
        <h3>{book.title}</h3>
        <h3>By {book.author}</h3>
        <p>{book.description}</p>
        <p>{book.read}</p>
      </div>
      <div className="book-buttons">
        <button onClick={(event) => edit(book)}>Edit</button>
        <button onClick={(event) => deleteBook(book)}>Delete</button>
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleBook;
