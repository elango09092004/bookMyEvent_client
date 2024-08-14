import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const response = await axios.post("http://localhost:5000/signup/signin", {
        email,
        password,
      });

      if (response.status === 200) {
        // Successful sign-in
        navigate("/home"); // Redirect to the homepage or dashboard
      }
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="signin">
      <div className="box">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputdiv">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
