import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here, you would typically send the data to your backend
      // For this example, we'll simply log the data and navigate to another page
      console.log("Form Submitted:", formData);
      navigate("/welcome"); // Navigate to a welcome or dashboard page
    }
  };

  return (
    <div className="signup">
      <div className="card">
        <div className="left">
          <h2>Kamal's Feed Sign Up</h2>
          <p>Here You can Explore Whatever You Want!</p>
          <span>Have An Account?</span>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
        <form className="right" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className={errors.username ? "error-input" : ""}
          />
          {errors.username && <p className="error-text">{errors.username}</p>}

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={errors.password ? "error-input" : ""}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}

          <Link to="/">
            <button type="submit" className="btn">
              Register
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
