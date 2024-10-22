import React from 'react';
import {Container} from 'react-bootstrap';
// import {Route, Routes, } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Characters from '../pages/Characters';
import Devices from '../pages/Devices';
import Dashboard from '../pages/Dashboard';
// import NewCharacter from './NewCharacter';
import NewItem from '../pages/NewItemModule';
// import NotFound from '../pages/NotFound';
import Worlds from '../pages/_Worlds';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import Register from '../pages/Register';
import Projects from '../pages/Projects';
import ItemInfo from '../pages/ItemInfo';
import Items from '../pages/Items';

function RouterComponent() {
  return (
    <Container className='bg-light p-5'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute element={Dashboard} />} />
        <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
        <Route path="/projects" element={<PrivateRoute element={Projects} />} />
        <Route path="/worlds" element={<PrivateRoute element={Items} />} />
        <Route path="/item-info/:id" element={<PrivateRoute element={ItemInfo} />} />
        <Route path="/characters" element={<PrivateRoute element={Characters} />} />
        <Route path="/new-item" element={<PrivateRoute element={NewItem} />} />
        <Route path="/devices" element={<PrivateRoute element={Devices} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Container>
  )
}

export default RouterComponent;