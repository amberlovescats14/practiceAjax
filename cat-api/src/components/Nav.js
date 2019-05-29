import React from 'react'
import { Navbar } from 'react-bootstrap'


export default function Nav() {
  return (
    <React.Fragment>
           <Navbar bg="dark" c >
        <Navbar.Brand className="text-white"href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-white">
        Signed in as: <a href="#login" className="text-warning">Amber Jones</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
    </React.Fragment>
  )
}
