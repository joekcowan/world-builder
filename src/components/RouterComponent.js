import React from 'react';
import {Container} from 'react-bootstrap';
import {Route, Routes} from 'react-router-dom';
import Characters from '../pages/Characters';
import Facets from '../pages/Facets';
import Home from '../pages/Home';
import NewCharacter from '../pages/NewCharacter';
import NewWorld from '../pages/NewWorld';
import NotFound from '../pages/NotFound';
import WorldInfo from '../pages/WorldInfo';
import Worlds from '../pages/Worlds';

function RouterComponent() {
  return (
    <Container className='bg-light p-5'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/worlds" element={<Worlds />} />
        <Route path="/new-world" element={<NewWorld />} />
        <Route path="/world-info" element={<WorldInfo authed={true} />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/new-character" element={<NewCharacter />} />
        {/* <Route path="/character-info" element={<CharacterInfo />} /> */}
        <Route path="/facets" element={<Facets />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Container>
  )
}

export default RouterComponent;