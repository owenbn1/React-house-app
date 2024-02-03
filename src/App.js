import React , { useState }from 'react';
import HouseList from './HouseList';
import HouseForm from './HouseForm';


const API_URL = 'https://65bcbc4ab51f9b29e9322990.mockapi.io/houses';

const App = () => {
  const [selectedHouse, setSelectedHouse] = useState(null);

  const getHouses = async () => {
    const response = await fetch(API_URL);
    return await response.json();
  };

  const deleteHouse = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
  };

  const updateHouse = async (id, data) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  const updateRooms = async (id, newRooms) => {
    const response = await fetch(`${API_URL}/${id}`);
    const currentData = await response.json();
    await updateHouse(id, { ...currentData, rooms: newRooms });
  };

  const postHouse = async (data) => {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };



  const handleFormSubmit = async (data) => {
    if (selectedHouse) {
      await updateHouse(selectedHouse.id, data);
    } else {
      await postHouse(data);
    }
    setSelectedHouse(null);
  };

  return (
    <div>
      <HouseList
        getHouses={getHouses}
        deleteHouse={deleteHouse}
        updateRooms={updateRooms}
      />
      <HouseForm onSubmit={handleFormSubmit} initialData={selectedHouse} />
    </div>
  );
};

export default App;