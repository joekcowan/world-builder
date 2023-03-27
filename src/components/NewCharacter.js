import React, {useRef}  from 'react';
import {Form, Card, Col, Row} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

export default function NewCharacter() {

  const navigate = useNavigate();
  let worldIds = [];
  const nameRef = useRef();
  const imageRef = useRef();
  const descriptRef = useRef();

  function submitHandler(event) {
    event.preventDefault();//stops form submit
    const characterData = {};
    characterData.name = nameRef.current.value;//gets value of ref
    characterData.image = imageRef.current.value;
    characterData.description = descriptRef.current.value;
    characterData.worldIds = worldIds;

    addCharacterHandler(characterData);//send data back through component
  }
  //function that grabs data sent from NewMeetupForm comp
  function addCharacterHandler(characterData) {

    fetch(
      "https://world-builder-5ae37-default-rtdb.firebaseio.com/characters.json",
      {
        method: "POST",
        body: JSON.stringify(characterData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate(-1);
    });
  }

  return (
    <Row className='mt-3'>
      <Col xs={12}>
        <Card>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              <Row className='justify-content-center align-items-center g-2'>
                <Col xs={6}>
                  <h1>Create A New Character</h1>
                  <Form.Group className="mt-3">
                    <Form.Label htmlFor="title">Name</Form.Label>
                    <Form.Control type="text" as='input' required id="name" ref={nameRef} />
                  </Form.Group>
                  {/* <Form.Group className="mt-3">
                    <Form.Label htmlFor="origin">Connected Worlds</Form.Label>
                    <Form.Control type="text" as='input' id="worlds" />
                  </Form.Group> */}
                  <Form.Group className="mt-3">
                    <Form.Label htmlFor="image">Image URL</Form.Label>
                    <Form.Control type="url" as='input' id="image" ref={imageRef} />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label htmlFor="description">Description</Form.Label>
                    <Form.Control as="textarea" id="description" rows="5" ref={descriptRef} />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Control as='input' type='submit' className='btn btn-success btn-lg' />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}
