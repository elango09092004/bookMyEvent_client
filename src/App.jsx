import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar"
import React from "react"
import Home from "./Components/Home"
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"
import AddEvent from "./Components/AddEvent"; 
import EventList from "./Components/EventList";
import BookingList from "./Components/BookingList"
// import "./App.css"

const App=()=>{
    return (
        <BrowserRouter>
     
        <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/addevent" element={<AddEvent />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/bookings" element={<BookingList />} />
        </Routes>
        </BrowserRouter>
    )

}
export default App