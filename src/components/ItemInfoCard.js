import React from 'react';
// import {Card} from 'react-bootstrap';

function ItemInfoCard(props) {

  const item = props.item;

  return (
    <div className=''>
      <h4 className='fs-2'>{item.name}</h4>
      <h5 className='text-muted'>{item.type+' | '+item.origin}</h5>
      <br />
      <h5 className='fw-bold'>About this Project</h5>
      <p>{item.description}</p>
    </div>
  )
}

export default ItemInfoCard;