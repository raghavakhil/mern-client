import React, { ReactNode } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import CreateBook from "./pages/createBook/index";
import ShowBookList from "./pages/showBookList/index";
import Login from "./pages/login/index";

interface childrenPropsConfig {
  children: ReactNode;
  path: string;
}

const PrivateRoute = ({ children, ...restProps }: childrenPropsConfig) => {
  return (
    <Route
      {...restProps}
      render={(props) =>
        localStorage.getItem("user") ? (
          children
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

const RouterApp = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <PrivateRoute path="/home">
          <ShowBookList />
        </PrivateRoute>
        <PrivateRoute path="/create-book">
          <CreateBook />
        </PrivateRoute>
      </Switch>
    </>
  );
};

export default RouterApp;