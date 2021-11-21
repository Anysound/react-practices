import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { About } from "../pages/About";
import { Error404 } from "../pages/Error404";
import { PostIdPage } from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/posts">
        <Posts />
      </Route>
      <Route exact path={`/posts/:id`}>
        <PostIdPage />
      </Route>
      <Route path="/error">
        <Error404 />
      </Route>
      <Redirect to="/error" />
    </Switch>
  );
};
