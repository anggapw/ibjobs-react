import React from 'react';
import ReactPlayer from 'react-player/youtube'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './VideoList.css'

const VideoList = ({url, title}) => {
    return (
        <div className="VideoSection">
            <Container>
                <h4 className="d-flex justify-content-center">Latest from ImpactByte</h4>
                <Row>
                    <Col>
                        <ReactPlayer url='https://www.youtube.com/watch?v=8HFq1GGv0E0' width='100%' height='300px' />
                    </Col>
                    <Col>
                        <ReactPlayer url='https://www.youtube.com/watch?v=aUMvl_IeHIQ' width='100%' height='300px' />
                    </Col>
                    <Col>
                        <ReactPlayer url='https://www.youtube.com/watch?v=Xu1wA7CfhQg' width='100%' height='300px' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default VideoList;