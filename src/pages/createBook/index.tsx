import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { addBook } from "../../redux/booklist/actions";
import { Logout } from "../logout/index";
import { FormElement } from "../../components/styles";
import { InputSubmit, InputText } from "../../components/Input";

interface stateConfig {
  books: any;
}
const CreateBookStyle = styled.div`
  border: 5px solid white;
  background-color: #2c3e50;
  color: white;
`;
const H1 = styled.h1`
  text-align: center;
`;
const P = styled.p`
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

const CreateBook = () => {
  const history = useHistory();
  const [formBook, setFormBook] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
  });
  const book = useSelector((state: stateConfig) => state.books);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormBook({ ...formBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      title: formBook.title,
      isbn: formBook.isbn,
      author: formBook.author,
      description: formBook.description,
      published_date: formBook.published_date,
      publisher: formBook.publisher,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((res) => {
        setFormBook({
          title: "",
          isbn: "",
          author: "",
          description: "",
          published_date: "",
          publisher: "",
        });
        dispatch(addBook(data));
        history.push("/home");
      })
      .catch((err) => {
        console.log("Error in CreateBook!");
      });
  };

  return (
    <>
      <CreateBookStyle>
        <H1>Add Book</H1>
        <P>Create new book</P>
        <div>
          <A href="/home">Show Book List</A>
          <Div>{localStorage.getItem("user") && <Logout />}</Div>
        </div>
        <FormElement onSubmit={handleSubmit}>
          <InputText
            type="text"
            id="title"
            placeholder="Title of the Book"
            name="title"
            labelName="Title of the Book"
            value={book.title}
            onChange={handleChange}
          />
          <InputText
            type="text"
            id="isbn"
            labelName="ISBN"
            placeholder="ISBN"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
          />
          <InputText
            type="text"
            id="author"
            labelName="Author"
            placeholder="Author"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
          <InputText
            type="text"
            id="description"
            labelName="Description"
            placeholder="Describe this book"
            name="description"
            value={book.description}
            onChange={handleChange}
          />
          <InputText
            type="date"
            id="date"
            labelName="Published Date"
            placeholder="published_date"
            name="date"
            value={book.published_date}
            onChange={handleChange}
          />
          <InputText
            type="text"
            id="publisher"
            labelName="Publisher of this Book"
            placeholder="Publisher of this Book"
            name="publisher"
            value={book.publisher}
            onChange={handleChange}
          />
          <InputSubmit name="create" value="Create Book" />
        </FormElement>
      </CreateBookStyle>
    </>
  );
};

export default CreateBook;