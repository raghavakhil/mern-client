const FETCH_BOOKS = "FETCH_BOOKS";
const ADD_BOOKS = "ADD_BOOKS";

export const BookReducer = (state = { books: [] }, action: any) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, books: action.payload };
    case ADD_BOOKS:
      return { ...state, books: state.books.concat(action.payload) };
    default:
      return state;
  }
};