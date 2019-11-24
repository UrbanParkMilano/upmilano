import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav   } from 'react-bootstrap';
import navbarStyle from "./navbar.module.scss"

import Logo from "./logo"


const Navigation = () => (

    <Navbar bg="light" expand="md" className="bg-transparent" >
    <Navbar.Brand><Link to="/" ><div className={navbarStyle.logo}><Logo/></div></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className={navbarStyle.navbartoggler} />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
        <Nav.Link className={navbarStyle.navlinkcont}><Link to="/lineupandtickets" className={navbarStyle.navlink} activeClassName={navbarStyle.activenavlink}><h4>Line Up & Tickets</h4></Link></Nav.Link>
        <Nav.Link className={navbarStyle.navlinkcont}><Link to="/news" className={navbarStyle.navlink} activeClassName={navbarStyle.activenavlink}><h4>News</h4></Link></Nav.Link>
        <Nav.Link className={navbarStyle.navlinkcont}><Link to="/info" className={navbarStyle.navlink} activeClassName={navbarStyle.activenavlink}><h4>Info</h4></Link></Nav.Link>
        <Nav.Link className={navbarStyle.navlinkcont}><Link to="/contatti" className={navbarStyle.navlink} activeClassName={navbarStyle.activenavlink}><h4>Contatti</h4></Link></Nav.Link>
        
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
        </Nav>
        
    </Navbar.Collapse>
    </Navbar>


)

export default Navigation
