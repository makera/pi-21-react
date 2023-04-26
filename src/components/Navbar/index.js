import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import { UserContext, UserDispatchContext } from '../../store/UserContext'

export default function Navbar() {
  const dispatch = useContext(UserDispatchContext)
  const user = useContext(UserContext)
  function handleLogout() {
    dispatch({
      type: 'logout'
    })
  }
  return (
    <Nav>
      <Nav.Link as={Link} to="/" className='text-white'>Главная</Nav.Link>
      <Nav.Link as={Link} to="/about" className='text-white'>О компании</Nav.Link>
      {!user
        ? <Nav.Link as={Link} to="/login" className='text-white'>Войти</Nav.Link>
        : <>
          <Nav.Link href="#" className='text-white'>{user.username}</Nav.Link>
          <Nav.Link as={Link} to="/" className='text-white' onClick={() => handleLogout()}>Выход</Nav.Link>
        </>
      }
    </Nav>
  )
}
