import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context'
import { MyBtn } from '../UI/btn/MyBtn'
import { MyInput } from '../UI/input/MyInput'

export const Login = () => {
  
  const {auth, setAuth} = useContext(AuthContext);

  const login = evt => {
    evt.preventDefault();
    setAuth(true);
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h2>страница для логина</h2>
      <form action="" onSubmit={login}>
        <MyInput type="text" placeholder='name'/>
        <MyInput type="password" placeholder='surname'/>
        <MyBtn>Enter</MyBtn>
      </form>
    </div>
  )
}
