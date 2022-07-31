import React from 'react'; // required for Gatsby
import { AppLayout } from '../layouts/AppLayout';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Team() {
    return (
        <AppLayout>
            <h2>Team</h2>
            <Container>
                <Row>
                    <Col md={3} sm={6} xs={6}>1st</Col>
                    <Col md={3} sm={6} xs={6}>2nd</Col>
                    <Col md={3} sm={6} xs={6}>3rd</Col>
                    <Col md={3}s sm={6} xs={6}>4th</Col>
                </Row>
                </Container>
        </AppLayout>
    );
}

export default Team;
