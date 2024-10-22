import React from 'react';
import {Card, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function ItemCard(props) {

  const item = props.item;

  return (
    <Col key={item.id} className="g-2 card-hover" style={{width: '12rem', height: '12rem'}}>
      <Link
          to={`/item-info/${item.id}`}
          state={{ item: item }}
        className="text-decoration-none text-dark"
      >
        <Card className='shadow-sm bg-secondary text-light w-100 h-100'>
          <Card.Img variant="top" className='img-fluid w-100 h-100 overlay-img' src={item.imageUrl} />
          <Card.ImgOverlay className='d-flex flex-column justify-content-center text-center'>
            <Card.Title>
              <h4 className='align-self-center'>{item.name}</h4>
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Link>
    </Col>
  )
}