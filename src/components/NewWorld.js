import React, {useRef}  from 'react';
import {Form, Card, Col, Row} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function NewWorld() {

  const navigate = useNavigate();
  const originRef = useRef();
  const nameRef = useRef();
  const imageRef = useRef();
  const descriptRef = useRef();

  function submitHandler(event) {
    event.preventDefault();//stops form submit
    const worldData = {};
    worldData.origin = originRef.current.value;//gets value of ref
    worldData.name = nameRef.current.value;//gets value of ref
    worldData.image = imageRef.current.value;
    worldData.description = descriptRef.current.value;

    addWorldHandler(worldData);//send data back through component
  }
  //function that grabs data sent from NewMeetupForm comp
  function addWorldHandler(worldData) {

    fetch(
      "https://world-builder-5ae37-default-rtdb.firebaseio.com/worlds.json",
      {
        method: "POST",
        body: JSON.stringify(worldData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate('/world-info');
    });
  }

  return (
    <Row className='mt-3'>
      <Col xs={12}>
        <Card>
          <Card.Body>
            {/* <NewWorldForm onAddWorld={addWorldHandler} /> */}
            <Form onSubmit={submitHandler}>
              <Row className='justify-content-center align-items-center g-2'>
                <Col xs={6}>
                  <h1>Create A New World</h1>
                  <Form.Group className="mt-3">
                    <Form.Label htmlFor="title">World Name</Form.Label>
                    <Form.Control type="text" as='input' required id="name" ref={nameRef} />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label htmlFor="origin">What story does this world originate from?</Form.Label>
                    <Form.Control type="text" as='input' id="origin" ref={originRef} />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label htmlFor="image">Background Image URL</Form.Label>
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

export default NewWorld;