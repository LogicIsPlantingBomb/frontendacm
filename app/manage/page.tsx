'use client';

import React, { useState, useEffect } from 'react';
import { PlusIcon, PencilIcon, TrashIcon, UploadIcon } from 'lucide-react';

// Replace this with your actual API URL
const API_URL = 'http://localhost:3001/api';

// Replace with your Cloudinary cloud name
const CLOUDINARY_CLOUD_NAME = 'dhyvomxrq';
const CLOUDINARY_UPLOAD_PRESET = 'Signing Mode';

export default function EventDashboard() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_URL}/events`);
      if (!response.ok) throw new Error('Failed to fetch events');
      const data = await response.json();
    
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
      // You might want to set an error state here and display it to the user
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const uploadImage = async () => {
    if (!imageFile) return null;

    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to upload image');

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const handleCreateEvent = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newEvent = Object.fromEntries(formData);

    const imageUrl = await uploadImage();
    if (imageUrl) {
      newEvent.imageUrl = imageUrl;
    }

    try {
      const response = await fetch(`${API_URL}/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEvent),
      });
      if (!response.ok) throw new Error('Failed to create event');
      await fetchEvents();
      setIsModalOpen(false);
      setImageFile(null);
      setImagePreview('');
    } catch (error) {
      console.error('Error creating event:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleUpdateEvent = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedEvent = Object.fromEntries(formData);

    const imageUrl = await uploadImage();
    if (imageUrl) {
      updatedEvent.imageUrl = imageUrl;
    }

    try {
      const response = await fetch(`${API_URL}/events/${selectedEvent._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedEvent),
      });
      if (!response.ok) throw new Error('Failed to update event');
      await fetchEvents();
      setIsModalOpen(false);
      setSelectedEvent(null);
      setImageFile(null);
      setImagePreview('');
    } catch (error) {
      console.error('Error updating event:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      const response = await fetch(`${API_URL}/events/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete event');
      await fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Event Dashboard</h1>
      <button
        onClick={() => {
          setSelectedEvent(null);
          setIsModalOpen(true);
          setImagePreview('');
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
      >
        <PlusIcon className="inline mr-2" size={18} />
        Create Event
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-4 rounded shadow">
            <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-2">{event.description}</p>
            <p className="text-sm text-gray-500 mb-4">{new Date(event.date).toLocaleDateString()}</p>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setSelectedEvent(event);
                  setIsModalOpen(true);
                  setImagePreview(event.imageUrl);
                }}
                className="text-blue-500 hover:text-blue-700 mr-2"
              >
                <PencilIcon size={18} />
              </button>
              <button
                onClick={() => handleDeleteEvent(event._id)}
                className="text-red-500 hover:text-red-700"
              >
                <TrashIcon size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              {selectedEvent ? 'Edit Event' : 'Create Event'}
            </h2>
            <form onSubmit={selectedEvent ? handleUpdateEvent : handleCreateEvent}>
              <input
                type="text"
                name="title"
                placeholder="Event Title"
                defaultValue={selectedEvent?.title || ''}
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <textarea
                name="description"
                placeholder="Event Description"
                defaultValue={selectedEvent?.description || ''}
                className="w-full p-2 mb-4 border rounded"
                required
              ></textarea>
              <input
                type="date"
                name="date"
                defaultValue={selectedEvent?.date?.split('T')[0] || ''}
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                  Event Image
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label
                  htmlFor="image"
                  className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-flex items-center"
                >
                  <UploadIcon className="mr-2" size={18} />
                  {imageFile ? 'Change Image' : 'Upload Image'}
                </label>
              </div>
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover mb-4 rounded" />
              )}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedEvent(null);
                    setImageFile(null);
                    setImagePreview('');
                  }}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  {selectedEvent ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}      
