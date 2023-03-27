import React from 'react';
import {Card, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function CreateItemCard(props) {

  // let createLinkTo = "/*";
  // if(props.create == "world"){
  //   createLinkTo = "/new-world";
  // }
  // if(props.create == "character"){
  //   createLinkTo = "/new-character";
  // }

  return (
    <Col style={{width: '12rem', height: '12rem'}} className={"g-2"}>
        <Link to='/new-item' state={{ create: props.create }} className='btn w-100 h-100 p-0'>
        <Card className='w-100 h-100 text-success card-new'>
          <Card.Body className='d-flex align-items-center justify-content-center text-centered'>
            <h2 className='display-1 text-centered'>&#43;</h2 >
          </Card.Body>
        </Card>
      </Link>
    </Col>
  )
}