// HouseForm.js
import React, { useState } from 'react';

const HouseForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || { name: '', rooms: 0 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, rooms: parseInt(formData.rooms, 10) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Rooms:
        <input type="number" name="rooms" value={formData.rooms} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HouseForm;
