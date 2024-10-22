import React, {useRef}  from 'react';
import {Form, Card, Col, Row} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../utils/useAuth';
import {addProjectForUser} from '../utils/firebaseUtils';

function NewProject() {

  const navigate = useNavigate();
  const { user } = useAuth();
  const originRef = useRef();
  const nameRef = useRef();
  const imageRef = useRef();
  const descriptRef = useRef();

  async function submitHandler(event) {
    event.preventDefault(); // Stops form submission
    const projectData = {
      userId: user.uid,
      origin: originRef.current.value,
      name: nameRef.current.value,
      imageUrl: imageRef.current.value,
      description: descriptRef.current.value,
      type: 'project'
    };

    const isProjectAdded = await addProjectForUser(user.uid, projectData);

    if (isProjectAdded) {
      navigate('/item-info'); // Navigate after successful project addition
    } else {
      console.error("Failed to add the project");
    }
  }

  return (
    <Row className=''>
      <Col xs={12}>
        <Card className='shadow-sm'>
          <Card.Body className='p-5'>
            {/* <NewWorldForm onAddWorld={addProjectHandler} /> */}
            <Form onSubmit={submitHandler}>
              <Row className='justify-content-center align-items-center g-2'>
                <Col xs={6}>
                  <h1>Create A New Project</h1>
                  <Form.Group className="mt-3">
                    <Form.Label htmlFor="title">Project Name</Form.Label>
                    <Form.Control type="text" as='input' required id="name" ref={nameRef} />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label htmlFor="origin">What does this project originate from?</Form.Label>
                    <Form.Control type="text" as='input' id="origin" ref={originRef} />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label htmlFor="imageUrl">Background Image URL</Form.Label>
                    <Form.Control type="url" as='input' id="imageUrl" ref={imageRef} />
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

export default NewProject;