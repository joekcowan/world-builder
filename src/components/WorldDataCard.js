import React from 'react';
import {Card} from 'react-bootstrap';

function WorldDataCard(props) {
  return (
    <div>
      <h4 className='fs-2'>{props.name}</h4>
      <h5 className='text-muted'>{props.origin}</h5>
      <br />
      <h5 className='fw-bold'>About this world</h5>
      <p>{props.description}</p>
    </div>
  )
}

export default WorldDataCard;