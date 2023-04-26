import React from 'react'
import styles from './Header.module.scss'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import MyNavbar from '../Navbar'

export default function Header() {
  return (
    <Navbar>
      <Container className='text-bg-primary py-3' fluid>
        <div className='header'>
          <div className="logo"></div>
          <MyNavbar />
        </div>
      </Container>
    </Navbar>
  )
}
