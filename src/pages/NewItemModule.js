import React from 'react';
import {useLocation} from 'react-router-dom';
import NewCharacter from '../components/NewCharacter';
import NewWorld from '../components/NewWorld';
import NewProject from '../components/NewProject';

export default function NewItemModule() {
  const location = useLocation();
  const {create, parentId} = location.state;
  // console.log(create);
  let itemForm;
  if(create === "project")  itemForm = <NewProject/>;
  if(create === "world")  itemForm = <NewWorld parentId={parentId}/>;
  if(create === "character")  itemForm = <NewCharacter/>;
  return (
    <div>
      {itemForm}
    </div>
  )
}
