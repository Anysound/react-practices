import React from 'react'
import { MyBtn } from './UI/btn/MyBtn'

export const PostItem = (props) => {
  
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.number}, {props.title}</strong>
        <div className="">
          {props.post.body}
        </div>
      </div>
      <div className="post__btns">
        <MyBtn onClick={() => props.remove(props.post)}>Удалить</MyBtn>
      </div>
    </div>
  )
}
