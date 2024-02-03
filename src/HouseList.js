// HouseList.js
import React, { useState, useEffect } from 'react';
import HouseItem from './HouseItem';

const HouseList = ({ getHouses, deleteHouse, updateRooms, onEdit }) => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    getHouses().then((data) => setHouses(data));
  }, [getHouses]);

  const handleDelete = async (id) => {
    await deleteHouse(id);
    setHouses(houses.filter((house) => house.id !== id));
  };


  const handleUpdateRooms = async (id, newRooms) => {
    await updateRooms(id, newRooms);
    // Fetch the updated data after rooms are updated
    const updatedHouses = await getHouses();
    setHouses(updatedHouses);
  };

  return (
    <div>
      <h2>Houses</h2>
      <ul>
        {houses.map((house) => (
          <HouseItem
            key={house.id}
            house={house}
            onDelete={handleDelete}
            onUpdateRooms={handleUpdateRooms} // Pass the handleUpdateRooms function
          />
        ))}
      </ul>
    </div>
  );
};

export default HouseList;
