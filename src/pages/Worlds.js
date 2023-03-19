import React, {useEffect, useState} from 'react';
import {Row, Card, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CreateWorldCard from '../components/CreateWorldCard';

function Worlds() {

  const [loadedWorlds, setLoadedWorlds] = useState([]);

  //grab worlds from API and format data
  useEffect(() => {
    //get data
    fetch("https://world-builder-5ae37-default-rtdb.firebaseio.com/worlds.json").then(res => {
      return res.json();
    }).then(data => {

      //convert data to array to map
      const worlds = []
      for(const key in data) {
        const world = {
          id: key,
          ...data[key]
        };
        worlds.push(world);
      }
      //load received data
      setLoadedWorlds(worlds);
    });
  }, []);

  return (
    <Row xs={1} md={2} lg={4}>
      <CreateWorldCard />
      {loadedWorlds.map((item) => (

        <Col id={item.id} className="g-2 card-hover ">
          <Link to={'/world-info'} state={[item.id, item.image, item.name, item.origin, item.description]} className="text-decoration-none text-dark">
            <Card className='shadow-sm worlds-thumb-card'>
              <Card.Img variant="top" className='img worlds-thumbnail' src={item.image} />
              <Card.Body className='d-flex align-items-center justify-content-center'>
                <Card.Title className='text-center'>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row >
  )
}

export default Worlds;