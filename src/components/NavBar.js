import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'gatsby';

import { FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa';

import logo from '../images/logo.png';

import '../styles/NavBar.scss';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container fluid>
                <Link className="px-3 navbar-brand" to="/">
                    <img
                        src={logo}
                        width="60"
                        height="auto"
                        className="d-inline-block align-top"
                        alt="Northeastern Blockchain logo"
                    />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav flex-grow-1="true" pe-3="true">
                        <Link className="px-3 nav-link" to="/#about">
                            About
                        </Link>
                        <NavDropdown
                            className="px-3"
                            title="Initiatives"
                            id="collasible-nav-dropdown"
                        >
                            <Link className="dropdown-item" to="/research">
                                Research
                            </Link>
                            <Link className="dropdown-item" to="/governance">
                                Governance
                            </Link>
                            <NavDropdown.Divider />
                            <Link
                                className="dropdown-item"
                                to="https://open.spotify.com/show/3PlymH5URCaCy8OqSBMOdN?si=c3fc6748eb6744b3"
                            >
                                Podcast
                            </Link>
                        </NavDropdown>
                        <Link className="px-3 nav-link" to="/events">
                            Events
                        </Link>
                        <Link className="px-3 nav-link" to="/team">
                            Team
                        </Link>
                    </Nav>
                    <Nav className="sm-icons">
                        <Nav.Link
                            className="px-2 nav-item"
                            href="https://www.instagram.com/neublockchain"
                        >
                            <FaInstagram />
                        </Nav.Link>
                        <Nav.Link
                            className="px-2 nav-item"
                            href="https://twitter.com/NEU_Blockchain"
                        >
                            <FaTwitter />
                        </Nav.Link>
                        <Nav.Link
                            className="px-2 nav-item"
                            href="https://discord.gg/EP4yGCw9"
                        >
                            <FaDiscord />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
