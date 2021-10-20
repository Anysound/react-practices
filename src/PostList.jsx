import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { PostItem } from "./PostItem";

export const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <p>Посты не найдены!</p>;
  }

  return (
    <div>
      <h1>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          return (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem number={index + 1} remove={remove} post={post} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};
