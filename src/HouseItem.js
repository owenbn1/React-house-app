// HouseItem.js
import React, { useState } from 'react';
import HouseForm from './HouseForm';

const HouseItem = ({ house, onDelete, onUpdateRooms }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    onDelete(house.id);
  };

  const handleUpdateRooms = (newRooms) => {
    onUpdateRooms(house.id, newRooms);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <HouseForm
          onSubmit={handleUpdateRooms}
          initialData={{ name: house.name, rooms: house.rooms }}
        />
      ) : (
        <>
          {`${house.name} - ${house.rooms} rooms`}
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Update Rooms</button>
        </>
      )}
    </li>
  );
};

export default HouseItem;
