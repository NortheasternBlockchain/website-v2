import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa';

import '../styles/NavBar.css';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/" className="px-3">
                    <img
                        src="/images/logo.png"
                        width="60"
                        height="auto"
                        className="d-inline-block align-top"
                        alt="Northeastern Blockchain logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav flex-grow-1 pe-3>
                        <Nav.Link className="px-3" href="/#about">
                            About
                        </Nav.Link>
                        <NavDropdown
                            className="px-3"
                            title="Initiatives"
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item href="/research">
                                Research
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/governance">
                                Governance
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://open.spotify.com/show/3PlymH5URCaCy8OqSBMOdN?si=c3fc6748eb6744b3">
                                Podcast
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="px-3" href="/events">
                            Events
                        </Nav.Link>
                        <Nav.Link className="px-3" href="/team">
                            Team
                        </Nav.Link>
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
