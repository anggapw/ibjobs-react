import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import './JobCard.css'

const JobCard = ({ job }) => {
    return (
        <>
            {job.map((element) => (
                <div>
                    <Container>
                        <Row>
                            <h4 className="jobTitle">{element.jobTitle}</h4>
                        </Row>
                        <Row>
                            <span className="location"><i class="fas fa-map-marker-alt fa-lg"></i><p>{element.jobLocation}</p></span>
                            <span className="location"><i class="fas fa-briefcase fa-lg"></i><p>{element.jobPosition}</p></span>
                        </Row>
                        <hr/>
                    </Container>
                </div>
            ))}
        </>
    )
}

export default JobCard;