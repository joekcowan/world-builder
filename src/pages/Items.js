import React, {useEffect, useState} from 'react';
import {Row, Card} from 'react-bootstrap';
import {useAuth} from '../utils/useAuth';
import CreateItemCard from '../components/CreateItemCard';
import {fetchItemsByParentId, fetchitemsForUser} from '../utils/firebaseUtils';
import ItemCard from '../components/ItemCard';

export default function Items(props) {
  const {user} = useAuth(); // Get authenticated user
  const [loadedItems, setLoadedItems] = useState([]);

  // Fetch associated items for the project user
  useEffect(() => {
    const loadItems = async () => {
      const items = await fetchItemsByParentId(props.type, props.parentId);
      setLoadedItems(items);
    };
    loadItems();
  }, [user]);

  return (
    <Card className='mb-4'>
      <Card.Title className='bg-warning text-dark fs-4 ft-display p-3'>
      {props.type+'s'}
      </Card.Title>
      <Row xs={1} md={4} lg={4} className="w-auto pb-3 align-items-center justify-content-start">
        <CreateItemCard create={props.type} parentId={props.parentId} />
        {loadedItems.map((item) => (
          <ItemCard item={item} />
        ))}
      </Row>
    </Card>
  );
}
