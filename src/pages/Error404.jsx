import React from 'react'
import { Link } from 'react-router-dom'

export const Error404 = () => {
  
  return (
    <div>
      This page doesn't exist.
      <p><Link to="/posts">return to the posts</Link> </p>
    </div>
  )
}
