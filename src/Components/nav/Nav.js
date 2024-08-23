import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
//FakeApi kkkal
import CurrentUser from "../../FackeApis/CurrentUserData";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faEnvelope,
  faHome,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import DarkMode from "../darkmode/DarkMode";

export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="">
            <h3 className="logo">Kamal's Feed</h3>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to="/profile/id">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <div className="Nav-Searchbar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="search" />
          </div>
        </div>
        {/* ----------------------------- */}
        <div className="nav-right">
          <Link to="/chatbox/id">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faBell} />
          </Link>
          <DarkMode />
          <Link to="/">
            <FontAwesomeIcon icon={faBars} />
          </Link>
          <div className="user">
            <img
              className=""
              src={CurrentUser.map((user) => user.ProfieImage)}
              alt=""
            />
            <h4>Kamalesh</h4>
          </div>
        </div>
      </div>
    </nav>
  );
}
