import React from 'react';
import {Card} from 'react-bootstrap';

function WorldDataCard(props) {
  return (
    <Card className='h-100'>
      <Card.Body>
        <Card.Title className='fs-2'>{props.name}</Card.Title>
        <Card.Subtitle className='text-muted'>{props.origin}</Card.Subtitle>
        <br />
        <Card.Text className='fw-bold'>About this world</Card.Text>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default WorldDataCard;