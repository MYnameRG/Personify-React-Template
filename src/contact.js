import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import chat from "./icons8-chat-room-48.png";
import location from "./icons8-location-48.png";
import message from "./icons8-important-mail-48.png";
import phone from "./icons8-phone-48.png";

export default function Contact() {
    return (
    <Container className="main-portion">
        <Container className="header-container">
            <Row>
                <Col><u>Contact Us</u></Col>
            </Row>
        </Container>

        <Container className="caption-container">
        <Row>
            <Col>If you have a question or a comment, please call us on +91 8657 23673 (9.30am to 5.30pm. Monday to Saturday.) or email us at support@personify.net or use the form below to contact us.</Col>
        </Row>            
        </Container>

        <Container className="form-container">
            <Row>
                <Col md={{ span: 4, offset: 1 }}>
              <Form>ohit
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Message" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
              </Form>
              </Col>

              <Col md={{ span: 3, offset: 3 }}>
                <div className="element-container">
                    <img src={chat} alt="" /> Chat Online
                </div>
                <div className="element-container">
                    <img src={location} alt="" /> Our Location
                </div>
                <div className="element-container">
                    <img src={message} alt="" /> personify@email.net
                </div>
                <div className="element-container">
                    <img src={phone} alt="" /> Phone Number
                </div>                                                
              </Col>               
            </Row>
        </Container>
    </Container>);
}