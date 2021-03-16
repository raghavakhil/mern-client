const FETCH_BOOKS = "FETCH_BOOKS";
const ADD_BOOKS = "ADD_BOOKS";

export const fetchBook = (res: any) => ({
  type: FETCH_BOOKS,
  payload: res,
});

export const addBook = (res: any) => ({
  type: ADD_BOOKS,
  payload: res,
});