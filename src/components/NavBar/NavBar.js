import React from "react";
import "./NavBar.css";
import keep from "../../assets/Google_Keep_icon.svg";

const NavBar = (props) => {
  return (
    <div className="navBar">
      <div className="left">
        <div className="ham-icon">
          <span
            className="material-symbols-outlined"
            onClick={props.togglenavBarActiveStateHandler}
          >
            menu
          </span>
        </div>

        <img src={keep} className="logo" alt="keep" />
        <div className="tab-name">Keep</div>
      </div>
      <div className="middle">
        <div className="search-icon">
          <span className="material-symbols-outlined">search</span>
        </div>

        <input
          type="text"
          placeholder="Search"
          name="search_input"
          className="form-text"
        ></input>
      </div>
      <div className="right">
        <div className="right-01">
          <ul>
            <li>
              <span className="material-symbols-outlined size-9 nav_icon">
                refresh
              </span>
            </li>
            <li>
              <span className="material-symbols-outlined size-9 nav_icon">
                view_agenda
              </span>
            </li>
            <li>
              <span className="material-symbols-outlined size-9 nav_icon">
                settings
              </span>
            </li>
          </ul>
        </div>
        <div className="right-02">
          <ul>
            <li>
              <span className="material-symbols-outlined nav_icon">apps</span>
            </li>
            <li>
              <span className="material-symbols-outlined">account_circle</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
