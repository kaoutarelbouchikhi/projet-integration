import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, Row, Col, Container } from 'react-bootstrap/';


const Apropos = () => {
  return (
    <div className="w-100">
      <Navigation />
      <Container className="cont-about">
        <h1 className="text-white text-center p-4">Notre équipe</h1>
        <p className="text-white text-justify pb-3">
          You can offset grid columns in two ways: our responsive .
          offset- grid classes and our margin utilities. Grid classes
          are sized to match columns while margins are more useful for
          quick layouts where the width of the offset is variableYou can offset grid columns in two ways: our responsive
          .offset- grid classes and our margin utilities. Grid classes are sized to match columns while margins are more
          useful for quick layouts where the width of the offset is variable</p>
        <Row>
          <Col xs={{ offset: 2 }} xl={{ offset: 1 }}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-jumbo.jpg?quality=75&auto=webp"/>
              <Card.Body>
                <Card.Title>Programmeuse</Card.Title>
                <Card.Text>
                  Kaoutar
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={{ offset: 2 }} xl={{ offset: 1 }}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-jumbo.jpg?quality=75&auto=webp" />
              <Card.Body>
                <Card.Title>Intégratricer</Card.Title>
                <Card.Text>
                  Maria Paula Gracia
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={{ offset: 2 }} xl={{ offset: 1 }}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-jumbo.jpg?quality=75&auto=webp" />
              <Card.Body>
                <Card.Title>Designer</Card.Title>
                <Card.Text>
                  Johanne Munger
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Apropos;
