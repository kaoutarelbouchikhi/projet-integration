import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "../components/Logo";



const Footer = () => {
    return (
        <Container fluid
            className="footer">
            <Row>
                <Col xs={{ span: 5, offset: 1 }} md={{ span: 3, offset: 3 }} >
                    <Logo />
                </Col>
                <Col  xs={{ span: 5, offset: 1 }} md={{ span: 3, offset: 3 }}>
                    <ul class="list-inline social-buttons">
                        <li class="list-inline-item">
                            <a href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">
                                <i class="bi bi-facebook"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <h6 class="text-center p-2 text-white"> © 2022 Copyright  Team E</h6>
            </Row>
        </Container>
    )
}

export default Footer;

