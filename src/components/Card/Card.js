import React, { useState } from "react";
import "./Card.css";
import Menu from "./Menu";
import axios from "../axios";

const Card = (props) => {
  const [hoverShow, sethoverShow] = useState(false);
  const [menuVisibility, setmenuVisibility] = useState(false);

  function enableHoverShowhandler() {
    sethoverShow(true);
  }

  function disableHoverShowhandler() {
    if (!menuVisibility) {
      sethoverShow(false);
    }
  }

  function toggleMenuVisibilityHandler() {
    setmenuVisibility(!menuVisibility);
    sethoverShow(!hoverShow);
  }

  return (
    <div
      className="card"
      onMouseOver={enableHoverShowhandler}
      onMouseLeave={disableHoverShowhandler}
    >
      <div
        className={`card_top ${!hoverShow && "hide"}
        }`}
      >
        <span className="material-symbols-outlined card_tick_icon">
          check_circle
        </span>
      </div>
      <div className="card_header">
        <div className="card_content">{props.title}</div>
        <span
          className={`material-symbols-outlined card_pin_icon ${
            !hoverShow && "hide"
          }`}
        >
          push_pin
        </span>
      </div>

      <div className={`card_footer ${!hoverShow && "hide"}`}>
        <div className="card_box_icon">
          <div className="card_btm_div">
            <span className="material-symbols-outlined ml_ico nav_icon">
              add_alert
            </span>
          </div>
          <div className="card_btm_div">
            <span className="material-symbols-outlined ml_ico nav_icon">
              person_add
            </span>
          </div>
          <div className="card_btm_div">
            <span className="material-symbols-outlined ml_ico nav_icon">
              palette
            </span>
          </div>
          <div className="card_btm_div">
            <span className="material-symbols-outlined ml_ico nav_icon">
              image
            </span>
          </div>
          <div className="card_btm_div">
            <span className="material-symbols-outlined ml_ico nav_icon">
              archive
            </span>
          </div>
          <div className="card_btm_div" onClick={toggleMenuVisibilityHandler}>
            <span className="material-symbols-outlined nav_icon">
              more_vert
            </span>
          </div>
        </div>
      </div>
      {menuVisibility && (
        <div className="enable-card__menu">
          <Menu
            id={props.id}
            moveCardToTrashHandler={props.moveCardToTrashHandler}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
