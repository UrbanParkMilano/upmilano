import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav  } from 'react-bootstrap';
import navbarStyle from "./navbar.module.scss"
import Logo from "./logo"


const Navigation = () => (

    <Navbar bg="light" expand="md" className="bg-transparent" >
    <Navbar.Brand className={navbarStyle.logo}><Link to="/" ><Logo /></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className={navbarStyle.navbartoggler} />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
        <Nav.Link className={navbarStyle.navlinkcont}><h4><Link to="/lineupandtickets" className={navbarStyle.navlink} activeClassName={navbarStyle.activenavlink}>Line Up & Tickets</Link></h4></Nav.Link>
        {/* <Nav.Link className={navbarStyle.navlinkcont}><h4><Link to="/news" className={navbarStyle.navlink} activeClassName={navbarStyle.activenavlink}>News</Link></h4></Nav.Link>  */}
        <Nav.Link className={navbarStyle.navlinkcont}><h4><Link to="/info" className={navbarStyle.navlink} activeClassName={navbarStyle.activenavlink}>Info</Link></h4></Nav.Link>
        <Nav.Link className={navbarStyle.navlinkcont}><h4><Link to="/location" className={navbarStyle.navlink} activeClassName={navbarStyle.activenavlink}>Location</Link></h4></Nav.Link>
        <Nav.Link className={navbarStyle.navlinkcont}><h4><Link to="/contatti" className={navbarStyle.navlink} activeClassName={navbarStyle.activenavlink}>Contatti</Link></h4></Nav.Link>
        </Nav> 
    </Navbar.Collapse>
    </Navbar>
)

export default Navigation
