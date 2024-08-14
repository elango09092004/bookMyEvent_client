import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BookingList.css";

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get("http://localhost:5000/bookings");
                setBookings(response.data);
            } catch (err) {
                setError("Failed to fetch bookings");
            }
        };

        fetchBookings();
    }, []);

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="booking-list">
            <h1>My Bookings</h1>
            {bookings.length > 0 ? (
                <ul>
                    {bookings.map((booking) => (
                        <li key={booking.bookingid} className="booking-item">
                            <h2>Event Title: {booking.event.title}</h2>
                            <p>Event Date & Time: {new Date(booking.event.dateTime).toLocaleString()}</p>
                            <p>Location: {booking.event.location}</p>
                            <p>Organizer: {booking.event.organizer}</p>
                            <p>Booked On: {new Date(booking.bookingdate).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No bookings found</p>
            )}
        </div>
    );
};

export default BookingList;
