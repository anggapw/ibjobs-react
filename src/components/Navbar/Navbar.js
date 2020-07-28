import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import Home from '../../pages/Home';
import List from '../../pages/List';
import Logo from '../../assets/logo/ib-logo.svg';
import './Navbar.css';

const Navbars = () => {
    return (
        <Router>
            {/* navbar start */}
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" fixed="top">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img alt="logo" src={Logo} width="100" height="auto" className="d-inline-block" />
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/List"><Nav.Link>Jobs</Nav.Link></LinkContainer>
                            <Nav.Link>Team</Nav.Link>
                        </Nav>
                        <Nav>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* end of navbar */}

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/List">
                    <List />
                </Route>
            </Switch>

        </Router>
    )
};

export default Navbars;