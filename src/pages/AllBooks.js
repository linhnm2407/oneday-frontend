import React from "react";
import Book from "../components/Book/Book";

const AllBooks = (props) => {
  return props.books.map((book) => <Book book={book} key={book.id} />);
};

export default AllBooks;
