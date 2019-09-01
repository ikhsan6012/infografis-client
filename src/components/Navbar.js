import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavbarComponent = props =>
	<Navbar bg="light" expand="lg">
		<Navbar.Brand as={ Link }  to="/">Infografis</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
				<Nav.Link as={ Link } to="/">Home</Nav.Link>
				<NavDropdown title="Indikator Kinerja Utama" id="basic-nav-dropdown">
					{ props.data.map((d, i) => 
						<NavDropdown.Item key={ i } as={ NavLink } to={ d.path }>{ d.title }</NavDropdown.Item>
					) }
				</NavDropdown>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
export default NavbarComponent