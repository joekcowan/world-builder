import React from 'react';
import {Card, Col, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <Row className='mt-3'>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title className='display-1'>Welcome to World Builder</Card.Title>
            <Card.Text>
              <h4>You have reached my world building app. This is an app designed to help gamers and storyteller's build out their ideas. To get started click on an option for your starting point.</h4>
            </Card.Text>
            <Link to="/worlds"><Button variant="primary" className='m-1'>Add A World</Button></Link>
            <Link to="/characters"><Button variant="primary" className='m-1'>Add a character</Button></Link>
          </Card.Body>
        </Card>

      </Col>
    </Row>
  )
}

export default Home;