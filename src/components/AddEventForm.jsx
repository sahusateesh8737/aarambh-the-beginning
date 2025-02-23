// src/components/AddEventForm.jsx
import React, { useState } from 'react';
import eventService from '../services/eventService';

const AddEventForm = ({ onEventAdded }) => {
  const [eventDetails, setEventDetails] = useState({
    name: '',
    date: '',
    time: '',
    venue: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
    console.log(`Changed ${name} to ${value}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await eventService.addEvent(eventDetails);
      onEventAdded();
      setEventDetails({
        name: '',
        date: '',
        time: '',
        venue: '',
        description: '',
      });
      console.log('Event added successfully');
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Event</h2>
      <input type="text" name="name" value={eventDetails.name} onChange={handleChange} placeholder="Event Name" required />
      <input type="date" name="date" value={eventDetails.date} onChange={handleChange} required />
      <input type="time" name="time" value={eventDetails.time} onChange={handleChange} required />
      <input type="text" name="venue" value={eventDetails.venue} onChange={handleChange} placeholder="Venue" required />
      <textarea name="description" value={eventDetails.description} onChange={handleChange} placeholder="Description" required></textarea>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEventForm;