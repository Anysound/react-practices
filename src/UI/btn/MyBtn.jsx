import React from 'react';
import classes from './MyBtn.module.css';

export const MyBtn = ({children, className, ...props}) => {
  
  return (
    <button {...props} className={className || classes.myBtn}>
      {children}
    </button>
  )
}
