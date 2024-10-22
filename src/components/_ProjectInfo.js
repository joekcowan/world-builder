import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
// import Characters from '../pages/Characters';
import ItemInfoCard from './ItemInfoCard';

function ProjectInfo() {

  //transfer id from world
  const location = useLocation();
  const { itemData } = location.state || {};

  return (
    <div className='h-100'>
      <Row>
        <Col>
          <Card className='p-5'>
            {/* <Card.Body> */}
            <Row>
              <Col>
                <Card.Img src={itemData.imageUrl} />
              </Col>
              <Col>
                <ItemInfoCard item={itemData} />
              </Col>
            </Row>
            {/* </Card.Body> */}
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        Associated Characters
        </Col>
      </Row>
    </div>
  )
}

export default ProjectInfo;