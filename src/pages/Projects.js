import React, {useEffect, useState} from 'react';
import { Row, Card} from 'react-bootstrap';
import {useAuth} from '../utils/useAuth';
import CreateItemCard from '../components/CreateItemCard';
import {fetchProjectsForUser} from '../utils/firebaseUtils';
import ItemCard from '../components/ItemCard';

function Projects() {
  const {user} = useAuth(); // Get authenticated user
  const [loadedProjects, setLoadedProjects] = useState([]);

  // Fetch associated projects for the signed-in user
  useEffect(() => {
    if(user) {
      const loadProjects = async () => {
        const projects = await fetchProjectsForUser(user.uid);
        setLoadedProjects(projects);
      };

      loadProjects();
    }
  }, [user]);

  return (
    <Card className='mb-4'>
      <Card.Title className='bg-warning text-dark fs-4 ft-display p-3'>
        Projects
      </Card.Title>
      <Row xs={1} md={4} lg={4} className="w-auto pb-3 align-items-center justify-content-start">
        <CreateItemCard create="project" />
        {loadedProjects.map((project) => (
          <ItemCard item={project} />
        ))}
      </Row>
    </Card>
  );
}

export default Projects;
