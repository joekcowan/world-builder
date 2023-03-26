import React from 'react';
import {Card, Col, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <section>
      <Row>
        <Col>
          <span className='display-1 mt-5'>Welcome to World Builder</span>
          <h4 className='mt-3'>You have reached my world building app. This is an app designed to help gamers and storyteller's build out their ideas. To get started click on an option for your starting point.</h4>
          <div className='mt-3'>
            <Link to="/worlds"><Button variant="primary" className='m-1'>Add A World</Button></Link>
            <Link to="/characters"><Button variant="primary" className='m-1'>Add a character</Button></Link>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default Home;