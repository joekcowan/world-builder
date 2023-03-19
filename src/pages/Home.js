import React from 'react';
import {Card, Col, Row, Button} from 'react-bootstrap';

function Home() {
  return (
    <Row className='mt-3'>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title className='display-1'>Welcome to World Builder</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

      </Col>
    </Row>
  )
}

export default Home;