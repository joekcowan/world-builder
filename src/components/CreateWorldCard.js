import React from 'react';
import {Card, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function CreateWorldCard() {
  return (
    <Col style={{maxWidth: '20rem', minHeight: '18rem'}} className={"g-2"}>
      <Link to='/new-world' className='btn w-100 h-100 p-0'>
        <Card className='w-100 h-100 text-success card-new'>
          <Card.Body className='d-flex align-items-center justify-content-center text-centered'>
            <h2 className='display-1 text-centered'>&#43;</h2 >
          </Card.Body>
        </Card>
      </Link>
    </Col>
  )
}

export default CreateWorldCard;