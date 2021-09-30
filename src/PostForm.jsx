import React, { useState } from 'react';
import { MyBtn } from './UI/btn/MyBtn';
import { MyInput } from './UI/input/MyInput';


export const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost)
    // setPosts([...posts, newPost])
  };

  return (
    <div>
      <form action="">
          {/* управляемый компонент */}
          <MyInput
            onChange={e => setPost({...post, title: e.target.value})}
            placeholder="название поста"
          />
          {/* неуправляемый компонент */}
          <MyInput
            onChange={e => setPost({...post, body: e.target.value})}
            placeholder="название поста"
          />
          <MyBtn onClick={addNewPost}>Push me</MyBtn>
        </form>    
    </div>
  )
}