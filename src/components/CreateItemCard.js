import React from 'react';
import {Card, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function CreateItemCard(props) {

  return (
    <Col style={{width: '12rem', height: '12rem'}} className="g-2 ms-3">
        <Link to='/new-item' state={{ create: props.create, parentId: props.parentId }} className='btn w-100 h-100 p-0'>
        <Card className='w-100 h-100 text-success card-new shadow-sm'>
          <Card.Body className='d-flex align-items-center justify-content-center text-centered'>
            <h2 className='display-1 text-centered'>&#43;</h2 >
          </Card.Body>
        </Card>
      </Link>
    </Col>
  )
}