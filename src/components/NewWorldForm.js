
import React, {useRef} from 'react';
import {Form} from 'react-bootstrap';

function NewWorldForm(props) {

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

    props.onAddWorld(worldData);//send data back through component
  }


  return (

    <Form onSubmit={submitHandler}>
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
        <Form.Control as="input" type='submit' className='btn btn-outline-success btn-lg' />
      </Form.Group>
    </Form>

  )
}

export default NewWorldForm;