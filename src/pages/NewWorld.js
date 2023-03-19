import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import NewWorldForm from '../components/NewWorldForm';

function NewWorld() {

  const navigate = useNavigate();

  //function that grabs data sent from NewMeetupForm comp
  function addWorldHandler(worldData) {

    fetch(
      "https://world-builder-5ae37-default-rtdb.firebaseio.com/worlds.json",
      {
        method: "POST",
        body: JSON.stringify(worldData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate('/worlds');
    });
  }

  return (
    <Row className='mt-3'>
      <Col>
        <Card>
          <Card.Body>
            <NewWorldForm onAddWorld={addWorldHandler} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default NewWorld;