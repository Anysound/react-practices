import React from 'react';
import cl from './Modal.module.css'

export const Modal = ({children, visible, setVisible}) => {
  const rootClasses = [cl.modal];

  if (visible) {
    rootClasses.push(cl.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.modal__content} onClick={(evt) => evt.stopPropagation()}>{children}</div>
    </div>
  )
}
