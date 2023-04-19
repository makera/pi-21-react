import React from 'react'
import styles from './Header.module.scss'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
  return (
    <Navbar>
      <Container className='text-bg-primary py-3' fluid>
        <div className='header'>
          <div className="logo"></div>
          <Nav>
            <Nav.Link href="#">Вакансии</Nav.Link>
            <Nav.Link href="#">Соискатели</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  )
}
