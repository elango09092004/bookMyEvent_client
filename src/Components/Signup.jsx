import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signup", {
        name: username,
        email: email,
        password: password,
      
      });

      if (res.status === 201) {
        navigate("/signin");
      }
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="signup">
      <div className="box">
        <h1>Signup</h1>
        <form onSubmit={handleSignup} className="elements">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="button">
            Signup
          </button>
          <p>
            Already have an account? <Link to="/signin">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
