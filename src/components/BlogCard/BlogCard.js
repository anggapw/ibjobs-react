import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap';

import './BlogCard.css'

const BlogCard = ({ blog }) => {
    return (
        <>
            {blog.map(element => (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <Card className ="shadow p-3 mb-5 bg-white rounded" style={{ width: '30rem' }}>
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">{element.blogCategory}</Card.Subtitle>
                                        <Card.Title>{element.blogTitle}</Card.Title>
                                        <p className="blogAuthor">{element.blogAuthor}</p>
                                        <Card.Text>
                                            <p>{element.blogDescription}</p>
                                        </Card.Text>
                                        <LinkContainer to={`/blog/${element.blogTitle}`}><Button as="input" type="submit" value="Read more" /></LinkContainer>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ))}
        </>
    )
}

export default BlogCard;