import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import DashboardCard from '../components/DashboardCard';
import Worlds from './_Worlds';
import Characters from './Characters';
import Projects from './Projects';

function Dashboard() {
  return (
    <section>
      <Card className='mb-4 p-3'>
        <Row className='mb-3 d-flex m-auto justify-content-center'>
          <Col md={11}>
              <span className='display-1 ft-secondary'>Welcome to <span className='ft-display text-warning'>WorldBuildr</span></span>
              <h4 className='mt-3'><span className='ft-display'>WorldBuildr</span> is an app designed to help gamers and storyteller's build out their ideas. To get started click on an option for your starting point.</h4>
          </Col>
        </Row>
        <Row className='d-flex m-auto justify-content-center'>
          <Col md={4} xs={12} className='mt-2'>
            <DashboardCard variant="secondary" icon="book" title="View Projects" description="View, create, edit projects and stories for your worlds and characters." navigateTo="/projects" />
          </Col>
          <Col md={4} xs={12} className='mt-2'>
            <DashboardCard variant="primary" icon="earth-americas" title="View Worlds" description="View, create, edit Worlds." navigateTo="/worlds" />
          </Col>
          <Col md={4} xs={12} className='mt-2'>
            <DashboardCard variant="success" icon="people-group" title="View Characters" description="View, create, edit Characters." navigateTo="/characters" />
          </Col>
        </Row>
      </Card>
      <Projects></Projects>
      {/* <Worlds></Worlds>
      <Characters></Characters> */}
    </section>
  )
}

export default Dashboard;