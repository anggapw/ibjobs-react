import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Logo from '../../assets/logo/ib-logo.svg';

const Footer = () => {
    return (
        <Container>
            <div>
                <hr/>
            </div>
            <Row>
                <Col>
                <img alt="logo" src={Logo} width="100" height="auto"/>
                </Col>
                <Col>
                <span><h4>Follow</h4></span><i class="fab fa-facebook fa-2x"></i><i class="fab fa-twitter fa-2x"></i><i class="fab fa-instagram fa-2x"></i><i class="fab fa-youtube fa-2x"></i>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;