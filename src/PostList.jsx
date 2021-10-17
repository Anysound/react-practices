import React from 'react';
import { PostItem } from './PostItem';

export const PostList = ({posts, title, remove}) => {
  
  if (!posts.length) {
    return (
      <p>Посты не найдены!</p>
    )
  }

  return (
    <div>
      <h1>{title}</h1>    
      {posts.map((post, index) => {
        return <PostItem number={index + 1} remove={remove} post={post} key={post.id}/>
      })}
    </div>
  )
}
