import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './BlogCard.css'

const BlogCard = ({ blog }) => {
    return (
        <>
            {blog.map((element) => (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <Card style={{ width: '30rem' }}>
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted">{element.blogCategory}</Card.Subtitle>
                                        <Card.Title>{element.blogTitle}</Card.Title>
                                        <p>{element.blogAuthor}</p>
                                        <Card.Text>
                                            <p>{element.blogDescription}</p>
                                        </Card.Text>
                                        <Button as="input" type="submit" value="Read more" />
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