import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import analysis from "./icons8-financial-growth-analysis-64.png";
import support from "./icons8-customer-support-64.png";
import security from "./icons8-fingerprint-64.png";
import social from "./icons8-helping-hand-64.png";

export default function Whatwedo() {
    return (
    <Container className="main-portion">
        <Container className="header-container">
            <Row>
                <Col><u>What We Do</u></Col>
            </Row>
        </Container>

        <Container className="caption-container">
            <Row>
                <Col>
                This is Personify, free Bootstrap 4.0 React template. 
                This layout is what you can modify and use for your websites. Please spread a word 
                to your friends about our website. Thank you for supporting us. If you have any 
                question, you can contact us or chat with us on our Tooplate Facebook page.
                </Col>
            </Row>            
        </Container>
        
        <Container className="data-container">
            <Row>
                <Col md={{ span: 3, offset: 0 }}><img src={analysis} alt="" /> Market Analysis</Col>
                <Col md={{ span: 3, offset: 3 }}><img src={support} alt="" /> Fast Support</Col>
            </Row>
            <Row>
                <Col md={{ span: 0, offset: 1 }} className="desp-container" >The attractiveness and the dynamics of a special market 
                within a special industry. It is part of the industry analysis and thus in turn of the global 
                environmental analysis.</Col>
                <Col md={{ span: 0, offset: 1 }} className="desp-container" >Made up of individual people who provide support, respect, and care. These are people who are in your corner. 
                They do not judge you or ridicule you.</Col>
            </Row>
            <Row>
                <Col md={{ span: 3, offset: 0 }}><img src={security} alt="" /> Top Security</Col>
                <Col md={{ span: 3, offset: 3 }}><img src={social} alt="" /> Social Work</Col>
            </Row>
            <Row>
                <Col md={{ span: 0, offset: 1 }} className="desp-container" >Beneficiaries (technically referents) of security 
                may be of persons and social groups, objects and institutions, ecosystems or any other entity or phenomenon vulnerable to unwanted change.</Col>
                <Col md={{ span: 0, offset: 1 }} className="desp-container" >A practice-based profession that promotes social change, development, cohesion and the 
                empowerment of people and communities.</Col>
            </Row>
            <Row>
                <Col md={{ span: 3, offset: 5 }}><Button variant="primary" size="lg">Learn More About It</Button></Col>
            </Row>
        </Container>
    </Container>);
}