import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import CreateItemCard from '../components/CreateItemCard';
import {Link} from 'react-router-dom';

function Characters(props) {

  const worldId = props.worldId;
  const [loadedCharacters, setloadedCharacters] = useState([]);

  //grab characters from API and format data
  useEffect(() => {

    //get data
    fetch("https://world-builder-5ae37-default-rtdb.firebaseio.com/characters.json").then(res => {
      return res.json();
    }).then(data => {

      //convert data to array to map
      const characters = []
      for(const key in data) {
        const character = {
          id: key,
          ...data[key]
        };
        characters.push(character);
      }

      //load received data
      setloadedCharacters(characters);
    });
  }, []);

  return (
    <div>
      <p className='alert alert-warning m-2'>NOTE: working on some kinks in the data management. Please bare with me.</p>
    <Row xs={1} md={4} lg={4} className="w-auto align-items-center justify-content-center">
      <CreateItemCard create="character" />
      {loadedCharacters.map((item) => (
        <Col className="g-2 card-hover" style={{width: '12rem', height: '12rem'}}>
          <Link to={'/character-info'} state={[item.id, item.image, item.name, item.worldIds, item.description]} className="text-decoration-none text-dark">
            <Card className='shadow-sm bg-secondary text-light w-100 h-100'>
              <Card.Img variant="top" className='img-fluid w-100 h-100 overlay-img' src={item.image} />
              <Card.ImgOverlay className='d-flex flex-column justify-content-center text-center'>
                <Card.Title className=''><h4 className='align-self-center'>{item.name}</h4></Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
      ))}
    </Row >
    </div>
  )
}

export default Characters;