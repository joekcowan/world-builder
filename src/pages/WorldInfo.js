import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import WorldDataCard from '../components/WorldDataCard';
import Characters from './Characters';

function WorldInfo() {

  //transfer id from world
  const location = useLocation();
  const [worldId, imageUrl, name, origin, description] = location.state;
  let infoProps = {
    name: name,
    origin: origin,
    description: description
  };

  return (
    <div className='h-100'>
      <Row>
        <Col>
          <Card className='p-5'>
            {/* <Card.Body> */}
            <Row>
              <Col>
                <Card.Img src={imageUrl} />
              </Col>
              <Col>
                <WorldDataCard {...infoProps} />
              </Col>
            </Row>
            {/* </Card.Body> */}
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <Characters {...worldId} />
        </Col>
      </Row>
    </div>
  )
}

export default WorldInfo;