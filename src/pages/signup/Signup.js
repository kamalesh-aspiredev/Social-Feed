import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="signup">
      <div className="card">
        <div className="left">
          <h2>Kamal's Feed Sign Up</h2>
          <p>Here You can Explore Whatever You Want!</p>
          <span> Have An Account?</span>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
        <form className="right">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
