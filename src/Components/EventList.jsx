import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EventList.css";
import NavBar from "./NavBar";

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get("http://localhost:5000/event");
                setEvents(response.data);
            } catch (err) {
                setError("Failed to fetch events");
            }
        };

        fetchEvents();
    }, []);

    const handleAddToBooking = async (eventId) => {
        try {
            const user = "elango@gmail.com";
            const bookingdate = new Date();
            await axios.post("http://localhost:5000/bookings", { event: eventId, user, bookingdate , ticketPricing });
            alert("Event added to booking!");
        } catch (err) {
            alert("Failed to add event to booking");
        }
    };

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
      <>   <NavBar/>
        <div className="event-list">
            
            <h1>Event List</h1>
            {events.length > 0 ? (
                <ul>
                    {events.map((event) => (
                        <li key={event.id} className="event-item">
                            <h2>{event.title}</h2>
                            <p>{event.description}</p>
                            <p>Date & Time: {new Date(event.dateTime).toLocaleString()}</p>
                            <p>Location: {event.location}</p>
                            <p>Organizer: {event.organizer}</p>
                            <p>Category: {event.category}</p>
                            <p>Capacity: {event.capacity}</p>
                            <p>Ticket Pricing: ${event.ticketPricing}</p>
                            <img src={event.imageUrl} alt={event.title} className="event-image" />
                            <p>Status: {event.status}</p>
                            <button onClick={() => handleAddToBooking(event._id)}>Add to Booking</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No events available</p>
            )}
        </div></>
    );
};

export default EventList;
