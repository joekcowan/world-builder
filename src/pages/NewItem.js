import React from 'react';
import {useLocation} from 'react-router-dom';
import NewCharacter from '../components/NewCharacter';
import NewWorld from '../components/NewWorld';

export default function NewItem(props) {
  const location = useLocation();
  const {create} = location.state;
  console.log(create);
  let itemForm;
  if(create == "world")  itemForm = <NewWorld/>;
  if(create == "character")  itemForm = <NewCharacter/>;
  return (
    <div>
      {itemForm}
    </div>
  )
}
