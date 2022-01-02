import React from "react";
import { useHistory } from "react-router-dom";
import { MyBtn } from "./UI/btn/MyBtn";

export const PostItem = (props) => {
  const router = useHistory();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}, {props.title}
        </strong>
        <div className="">
          {props.post.id}. {props.post.body}
        </div>
      </div>
      <div className="post__btns">
        <MyBtn onClick={() => router.push(`/posts/${props.post.id}`)}>Открыть</MyBtn>
        <MyBtn onClick={() => props.remove(props.post)}>Удалить</MyBtn>
      </div>
    </div>
  );
};
