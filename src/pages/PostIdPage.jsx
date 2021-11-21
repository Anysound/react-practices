import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { Loader } from "../UI/loader/Loader";

export const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  console.log(post);

  const [fetchPostId, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fetchComments, isLoadingComments, comError] = useFetching(async () => {
    const response = await PostService.getCommentsById(params.id);
    console.log(response);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostId();
    fetchComments();
  }, []);

  return (
    <div>
      You opened post page with id {params.id}
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <p>
            {post.id}.{post.title}
          </p>
        </div>
      )}
      {isLoadingComments ? (
        <Loader />
      ) : (
        <div>
          <h2>Comments:</h2>
          {comments.map((it) => {
            return (
              <div style={{border: '2px solid teal', margin: '5px 0'}}>
                <p>{it.name}</p>
                <p>{it.email}</p>
                <p>{it.body}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
