import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import ItemInfoCard from '../components/ItemInfoCard';
import Worlds from './_Worlds';
import Characters from './Characters';
import Devices from './Devices';
import Items from './Items';

function ItemInfo() {

  //transfer data from itemCard
  const location = useLocation();
  const {item} = location.state || {};

  if(!item) {
    return <p>No item data found.</p>;
  }

  let associatedComponent = '';
  let associatedType = '';
  switch(item.type) {
    case 'project':
      associatedType = 'world';
      break;
    case 'world':
      associatedType = 'character';
      break;
    case 'character':
      associatedType = 'device';
      break;
  }

  return (
    <div className='h-100'>
      <Row className='mb-2'>
        <Col>
          <Card className='p-3'>
            <Row >
              <Col sm={12} md={6} className='mb-2'>
                <Card.Img src={item.imageUrl}/>
              </Col>
              <Col sm={12} md={6} className='mb-2'>
                <ItemInfoCard item={item} />
              </Col>
            </Row>
            {/* </Card.Body> */}
          </Card>
        </Col>
      </Row>
      <Items type={associatedType} parentId={item.id}/>
    </div>
  )
}

export default ItemInfo;