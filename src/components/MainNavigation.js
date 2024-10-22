
import {Navbar, Container, Nav} from "react-bootstrap";
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import Logout from '../pages/Logout';
import CustomIcon from './CustomIcon';
import useCurrentUser from '../utils/useCurrentUser';

function MainNavigation() {
  const {user, userData, loading, error}= useCurrentUser();
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  // if (!user) return <p>No user is logged in.</p>;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/"><Navbar.Brand className='ft-display text-warning'><span className='fw-normal'>World</span><span className='fw-lighter'>Buildr</span></Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/dashboard">
              <Nav.Link >
                <CustomIcon id="nav-1" text="Dashboard" fa="gauge"></CustomIcon>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>
                <CustomIcon id="nav-2" text="Projects" fa="book"></CustomIcon>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/worlds">
              <Nav.Link>
                <CustomIcon id="nav-3" text="Worlds" fa="earth-americas"></CustomIcon>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/characters">
              <Nav.Link>
                <CustomIcon id="nav-4" text="Characters" fa="people-group"></CustomIcon>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/devices">
              <Nav.Link>
                <CustomIcon id="nav-5" text="Devices" fa="shapes"></CustomIcon>
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            { userData && <span className='text-light me-4'>{userData.username}</span>}
        </Nav>
        <Nav>
          <Logout />
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar >
  )
}

export default MainNavigation;