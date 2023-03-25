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
    <Row xs={1} md={2} lg={4} className="h-100">
      <CreateWorldCard />
      {loadedWorlds.map((item) => (

        <Col id={item.id} className="g-2 card-hover " style={{width: '17rem', height: '15rem'}}>
          <Link to={'/world-info'} state={[item.id, item.image, item.name, item.origin, item.description]} className="text-decoration-none text-dark">
            <Card className='shadow-sm bg-secondary text-light w-100 h-100'>
              <Card.Img variant="top" className='img-fluid w-100 h-100 overlay-img' src={item.image} />
              <Card.ImgOverlay>
                <Card.Title className='text-center h3'><h3 style={{textAlign: "center", verticalAlign: "middle", marginTop: "30%"}}>{item.name}</h3></Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
      ))}
    </Row >
  )
}

export default Worlds;