import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h2>Kamal's Feed</h2>
          <p>Here You can Explore Whatever You Want!</p>
          <span>Don't Have An Account?</span>
          <Link to="/signup">
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>
        <form className="right">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <Link to="/">
            <button type="submit" className="btn">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
