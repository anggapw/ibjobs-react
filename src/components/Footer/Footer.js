import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Logo from '../../assets/logo/ib-logo.svg';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footerWrapper">
            <Container>
                <div>
                    <hr />
                </div>
                <Row>
                    <Col lg={4}>
                        <img alt="logo" src={Logo} width="100" height="auto" />
                    </Col>
                    <Col lg={8} className="d-flex justify-content-end">
                        <h5>Follow
                        <i class="fab fa-facebook"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-youtube"></i>
                        </h5>
                    </Col>
                </Row>
                <Row className="row-link">
                    <ul className="list-unstyled">
                        <li>Privacy</li>
                        <li>Cookie Preferences</li>
                        <li>Help Center</li>
                    </ul>
                </Row>
            </Container>
        </div>

    )
}

export default Footer;