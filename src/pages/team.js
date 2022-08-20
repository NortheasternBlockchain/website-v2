import React from 'react'; // required for Gatsby
import { AppLayout } from '../layouts/AppLayout';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from "../styles/Box.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nishay from "../images/headshots/nsh.jpeg";
import Ben from "../images/headshots/ben.jpeg";
import Ivan from "../images/headshots/ivan.jpeg";
import Shubh from "../images/headshots/shubh.jpeg";
import Youssef from "../images/headshots/Youssef.jpeg";
import Vasu from "../images/headshots/vasu.jpeg";
import Nora from "../images/headshots/nora.jpeg";
import Megan from "../images/headshots/meg.jpeg";
import Alyson from "../images/headshots/ally.jpeg";
import Jeremy from "../images/headshots/jeremy.jpeg";
import David from "../images/headshots/david.jpeg";
import Bernice from "../images/headshots/bernice.jpeg";
import Luke from "../images/headshots/luke.jpeg";

const cardInfo = [
  {
    description:
      " Alyson is doing Master’s in Business Analytics (MSBA’22). She loves Music, food, and clean. Her favorite crypto is Cosmos",
    title: "Alyson (Ran) Liu (Co-President)",
    image: Alyson,
    link: "https://www.linkedin.com/in/alysonliu/",
    id: 1,
  },
  {
    description:
      "David is doing Master's in Computer Science and he loves Video Games, Yield Farming, and Snowboarding. His favorite crypto is Bitcoin",
    title: "David Hsu (Co-President)",
    image: David,
    link: "https://www.linkedin.com/in/david-hsu-cfa-13858542/",
    id: 2,
  },
  {
    description:
      "Bennett is a 2nd Year, Data Science and FinTech Major working on his startup called BlockBeam. His favorite crypto is Algorand",
    title: "Bennett Thompson (Co Vice President)",
    image: Ben,
    link: "https://www.linkedin.com/in/thompsonbennett/",
    id: 3,
  },
  {
    description: "[Insert]",
    title: "Jeremy Koch (Co Vice President)",
    image: Jeremy,
    link: "https://www.linkedin.com/in/jeremy-kochnu/",
    id: 4,
  },
  {
    description:
      "Noura is a 2nd year student studying Finance and Experience Design. She is into MMA, Fencing, Origami, and Travelling. Her favorite crypto is Ethereum",
    title: "Noura Abdalla (Co-Director of Events)",
    image: Nora,
    link: "https://www.linkedin.com/in/noura-a/",
    id: 14,
  },
  {
    description:
      "Youssef is a 4th Year student majoring in Finance and Corporate Innovation & Ventures. He is interested in NFTs, Art, Fashion, DeFi, and Layer 2s. His favorite crypto is Ethereum",
    title: "Youssef Haidar (Co-Director of Research)",
    image: Youssef,
    link: "https://www.linkedin.com/in/youssefhh/",
    id: 6,
  },
  {
    description:
      "Vasu is a 3rd year student studying CS & Finance. He loves Climbing and economics. His favorite crypto is Ethereum",
    title: "Vasu Zalawadia (Co-Director of Research)",
    image: Vasu,
    link: "https://www.linkedin.com/in/vzalawadia/",
    id: 7,
  },
  {
    description: "[Insert]",
    title: "Nishay Madhani (Director of Technology)",
    image: Nishay,
    link: "https://nshmadhani.com",
    id: 8,
  },
  {
    description:
      "Ivan is a 2nd year Computer Science & Mathematics major. He is into Soccer and DeFi. His favorite crypto is Ethereum.",
    title: "Ivan Rosales (Director of Governance)",
    image: Ivan,
    link: "https://www.linkedin.com/in/ivangrosales/",
    id: 9,
  },
  {
    description: "[Insert]",
    title: "Bernice Luong (Director of Marketing)",
    image: Bernice,
    link: "https://www.linkedin.com/in/bernice-luong/",
    id: 10,
  },
  {
    description: "[Insert]",
    title: "Megan Gilbert (Head of Social Media)",
    image: Megan,
    link: "https://www.linkedin.com/in/megan--gilbert/",
    id: 11,
  },
  {
    title: "Shubh Patni (Head of Public Relations)",
    image: Shubh,
    description:
      "Shubh Patni is a first year student studying CS and Economics. He is a Blogger, Programmer, and creates content related to programming and tech. He is working at Phemex Student Fellowship and Coinbase Analyst Program. His Favorite Crypto is Ethereum",
    link: "https://shubhpatni.com",
    id: 12,
  },
  {
    description: "[Insert]",
    title: "Luke O'Neill (Director of Operations)",
    image: Luke,
    link: "https://www.linkedin.com/in/lukefoneill",
    id: 13,
  },
];


const renderCard = (card, index) => {

    return(
        
        <Card border="danger" style={{ width: '20rem' }} text="dark" key={index} class="box">
      <Card.Img variant="top" src= {card.image} class="cardimg" />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.description}
        </Card.Text>
        <Button href={card.link} variant="danger">Social</Button>
      </Card.Body>
    </Card>

    )
}

/*
function checkID(thisId, targetId) {

    return thisId < targetId;
}
*/

function Team() {
    return (
        <section>
        <AppLayout>
            <h2>Team</h2>
            <div class="circle-wrapper">
    <div class="success rectangle"></div>
  </div>
            <Container>
                <Row>
                
                <Col >
                {cardInfo.slice(0,2).map(renderCard)} 
                {cardInfo.slice(2,4).map(renderCard)}
                </Col>
               
               <Col>
                {cardInfo.slice(4,6).map(renderCard)}
                {cardInfo.slice(6,8).map(renderCard)}
                </Col>
                

                <Col>
                {cardInfo.slice(8,10).map(renderCard)}
                {cardInfo.slice(10,12).map(renderCard)}
                
                {cardInfo.slice(12,13).map(renderCard)}
                </Col>
                </Row>
                </Container>
        </AppLayout>
        </section>
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

/*
<div className="grid">
            {cardInfo.map(renderCard)}
            </div>
            */