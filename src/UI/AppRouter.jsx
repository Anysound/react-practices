import React from "react";
import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context";
import { About } from "../pages/About";
import { Error404 } from "../pages/Error404";
import { PostIdPage } from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import { privateRoutes, guestRoutes } from "../router";
import { Loader } from "./loader/Loader";

export const AppRouter = () => {
  const {auth, setAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>
  }

  return auth ? (
    <Switch>
      {privateRoutes.map((it) => (
        <Route path={it.path} component={it.component} exact={it.exact} key={it.path} />
      ))}
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {guestRoutes.map((it) => (
        <Route path={it.path} component={it.component} exact={it.exact} key={it.path} />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};
