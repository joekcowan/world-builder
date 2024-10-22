import React from 'react';
import {useLocation} from 'react-router-dom';
import WorldInfo from '../components/_WorldInfo';
import ProjectInfo from '../components/_ProjectInfo';
import CharacterInfo from '../components/_CharacterInfo';

export default function ItemInfoModule(props) {
  // const location = useLocation();
  const componentType = props.componentType;
  const itemId = props.itemId;
  // console.log(create);
  let itemComponent;
  if(componentType === "project")  itemComponent = <ProjectInfo projectId={itemId}/>;
  if(componentType === "world")  itemComponent = <WorldInfo worldId={itemId}/>;
  // if(componentType === "character")  itemComponent = <CharacterInfo characterId={itemId}/>;
  return (
    <div>
      {itemComponent}
    </div>
  )
}
