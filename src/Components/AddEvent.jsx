import React, { useState } from "react";
import axios from "axios";
import "./AddEvent.css";

const AddEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [location, setLocation] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [category, setCategory] = useState("");
  const [capacity, setCapacity] = useState("");
  const [ticketPricing, setTicketPricing] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/event", {
        title,
        description,
        dateTime,
        location,
        organizer,
        category,
        capacity,
        ticketPricing,
        imageUrl,
        status,
      });

      if (response.status === 201) {
        setMessage("Event created successfully!");
      }
    } catch (error) {
      setMessage("Failed to create event: " + error.response.data.message);
    }
  };

  return (
    <div className="add-event">
      <h1>Add New Event</h1>
      <form onSubmit={handleSubmit} className="event-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Organizer"
          value={organizer}
          onChange={(e) => setOrganizer(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Ticket Pricing"
          value={ticketPricing}
          onChange={(e) => setTicketPricing(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
          <option value="" disabled>Status</option>
          <option value="Scheduled">Scheduled</option>
          <option value="Postponed">Postponed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <button type="submit" className="button">Add Event</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddEvent;
