import React from 'react'; // required for Gatsby
import { AppLayout } from '../layouts/AppLayout';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from "../styles/Box.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const cardInfo = [{
    "name": "Nishay Madhani",
    "title": "Director of Technology",
    "img": "./src/images/profile.jpg",
    "social": "https://nshmadhani.com"
},
{
    "name": "Nishay Madhani",
    "title": "Director of Technology",
    "img": "./src/images/profile.jpg",
    "social": "https://nshmadhani.com"
},
{
    "name": "Nishay Madhani",
    "title": "Director of Technology",
    "img": "./src/images/profile.jpg",
    "social": "https://nshmadhani.com"
},
{
    "name": "Nishay Madhani",
    "title": "Director of Technology",
    "img": "./src/images/profile.jpg",
    "social": "https://nshmadhani.com"
},
{
    "name": "Nishay Madhani",
    "title": "Director of Technology",
    "img": "./src/images/profile.jpg",
    "social": "https://nshmadhani.com"
},
{
    "name": "Nishay Madhani",
    "title": "Director of Technology",
    "img": "./src/images/profile.jpg",
    "social": "https://nshmadhani.com"
},
{
    "name": "Nishay Madhani",
    "title": "Director of Technology",
    "img": "./src/images/profile.jpg",
    "social": "https://nshmadhani.com"
},
{
    "name": "Nishay Madhani",
    "title": "Director of Technology",
    "img": "./src/images/profile.jpg",
    "social": "https://nshmadhani.com"
}];


const renderCard = (card, index) => {

    return(
        <Card style={{ width: '18rem' }} text="dark" key={index} class="box">
      <Card.Img variant="top" src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg" />
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>
          {card.title}
        </Card.Text>
        <Button href={card.social} variant="primary">Social</Button>
      </Card.Body>
    </Card>
    )
}

function Team() {
    return (
        <AppLayout>
            <h2>Team</h2>
            <div className="grid">
            {cardInfo.map(renderCard)}
            </div>
        </AppLayout>
    );
}

export default Team;


/*
<Container>
                <Row>
                    <Col md={3} sm={6} xs={6}>1st</Col>
                    <Col md={3} sm={6} xs={6}>2nd</Col>
                    <Col md={3} sm={6} xs={6}>3rd</Col>
                    <Col md={3}s sm={6} xs={6}>4th</Col>
                </Row>
                </Container>
*/