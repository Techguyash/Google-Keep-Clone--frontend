import React from "react";
import { Link } from "react-router-dom";

import "./SideBar.css";
const SideBar = (props) => {
  return (
    <div className="sidebar">
      <div className="header">
        <Link to="Notes" style={{ textDecoration: "none" }}>
          <div className={`${props.navBarActiveState ? "item" : "item-1"}`}>
            <div className={`${props.navBarActiveState ? "menu" : "menu-1"}`}>
              <span className="material-symbols-outlined">lightbulb</span>
              <div className={`nav_text ${!props.navBarActiveState && "hide"}`}>
                Notes
              </div>
            </div>
          </div>
        </Link>
        <Link to="Remainder" style={{ textDecoration: "none" }}>
          <div className={`${props.navBarActiveState ? "item" : "item-1"}`}>
            <div className={`${props.navBarActiveState ? "menu" : "menu-1"}`}>
              <span className="material-symbols-outlined">notifications</span>
              <div className={`nav_text ${!props.navBarActiveState && "hide"}`}>
                Remainder
              </div>
            </div>
          </div>
        </Link>
        <div onClick={props.renderLabelComponentHandler}>
          <div className={`${props.navBarActiveState ? "item" : "item-1"}`}>
            <div className={`${props.navBarActiveState ? "menu" : "menu-1"}`}>
              <span className="material-symbols-outlined">edit</span>
              <div className={`nav_text ${!props.navBarActiveState && "hide"}`}>
                Edit Label
              </div>
            </div>
          </div>
        </div>

        <Link to="Archive" style={{ textDecoration: "none" }}>
          <div className={`${props.navBarActiveState ? "item" : "item-1"}`}>
            <div className={`${props.navBarActiveState ? "menu" : "menu-1"}`}>
              <span className="material-symbols-outlined">archive</span>
              <div className={`nav_text ${!props.navBarActiveState && "hide"}`}>
                Archive
              </div>
            </div>
          </div>
        </Link>
        <Link to="Trash" style={{ textDecoration: "none" }}>
          <div className={`${props.navBarActiveState ? "item" : "item-1"}`}>
            <div className={`${props.navBarActiveState ? "menu" : "menu-1"}`}>
              <span className="material-symbols-outlined">delete</span>
              <div className={`nav_text ${!props.navBarActiveState && "hide"}`}>
                Trash
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="footer">
        <h6 className="foss">Open-source-licence</h6>
      </div>
    </div>
  );
};

export default SideBar;
