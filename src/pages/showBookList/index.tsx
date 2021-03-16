import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchBook } from "../../redux/booklist/actions";
import { Logout } from "../logout/index";
import BookCard from "./BookCard";

interface stateConfig {
  books: any;
}
const ShowBookListStyle = styled.div`
  background-color: #2c3e50;
  color: white;
  border: 5px solid white;
  margin: 0;
  flex: 1;
`;
const List = styled.div`
  display: grid;
  margin: 20px 0 50px 0;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 1em;
`;
const H2 = styled.h2`
  text-align: center;
`;
const A = styled.a`
  margin-left: 10%;
  display: inline;
`;
const Div = styled.div`
  margin-left: 65%;
  display: inline;
`;
const ShowBookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:8082/api/books")
      .then((book) => {
        dispatch(fetchBook(book.data));
      })
      .catch((err) => {
        console.log("Error from ShowBookList");
      });
  }, []);

  const bookDetails = useSelector((state: stateConfig) => state.books);
  let bookList;
  if (!bookDetails.length) {
    bookList = <p>There is no book record!</p>;
  } else {
    bookList = bookDetails.map((formBook: any, k: any) => (
      <BookCard key={k} formBook={formBook} />
    ));
  }

  return (
    <>
      <ShowBookListStyle>
        <H2>Books List</H2>
        <div>
          <A href="/create-book">Add New Book</A>
          <Div>{localStorage.getItem("user") && <Logout />}</Div>
        </div>
        <List>{bookList}</List>
      </ShowBookListStyle>
    </>
  );
};

export default ShowBookList;