import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import CreateObjectCard from '../components/CreateObjectCard';

function Characters(props) {

  const worldId = props.worldId;
  const [loadedCharacters, setloadedCharacters] = useState([]);

  //grab characters from API and format data
  useEffect(() => {

    //get data
    fetch("https://world-builder-5ae37-default-rtdb.firebaseio.com/worlds/" + worldId + "/characters.json").then(res => {
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
    <Card className='p-5'>
        <Card.Title className='fs-2'>Characters</Card.Title>
        <h1>{props.worldId}</h1>
        <Row>
          <Col>
            <CreateObjectCard create="character"/>
          </Col>
        </Row>
        <ul>
          {loadedCharacters.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
    </Card>
  )
}

export default Characters;