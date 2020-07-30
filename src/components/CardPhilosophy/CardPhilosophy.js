import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './CardPhilosophy.css';



const CardPhilosophy = ({ detail }) => {
    return (
        <>
            {
                detail.map(element => {
                    if (element.position === "left") {
                        return (
                            <Container>
                                <Card className="cardBody">
                                    <Row>
                                        <Col lg={4}><img src={element.url} alt="card" className="cardImage" /></Col>
                                        <Col class="contentNormal">
                                            <h3>{element.title}</h3>
                                            <p>{element.description}</p>
                                            <Button variant="danger" size="sm">READ ABOUT OUT CULTURE &gt;</Button>
                                        </Col>
                                    </Row>
                                </Card>
                            </Container>
                        )
                    } else {
                        return (
                            <Container>
                                <Card className="cardBodyReverse">
                                    <Row className="rowReserve">
                                        <Col className="contentReserve">
                                            <h3>{element.title}</h3>
                                            <p>{element.description}</p>
                                            <Button variant="danger" size="sm">SEE WHAT'S NEXT &gt;</Button>
                                        </Col>
                                        <Col lg={4}><img src={element.url} alt="card" className="cardImage" /></Col>
                                    </Row>
                                </Card>
                            </Container>
                        )
                    }
                })
            }
        </>
    )
}

export default CardPhilosophy;