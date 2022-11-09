import React, { useState } from "react";
import "./Card.css";
const DeleteCard = (props) => {
  const [hoverShow, sethoverShow] = useState(false);

  function enableHoverShowhandler() {
    sethoverShow(true);
  }

  function disableHoverShowhandler() {
    sethoverShow(false);
  }

  function removeCard() {
    props.deleteNoteForeverHandler(props.id);
  }
  function restoreCard() {
    props.restoreDeletedNote(props.id);
  }

  return (
    <div
      className="delete_card"
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
      </div>

      <div className={`delete_card_footer ${!hoverShow && "hide"}`}>
        <div className="delete_card_box_icon">
          <div className="delete_card_btm_div" onClick={removeCard}>
            <span className="material-symbols-outlined ml_ico nav_icon">
              <span className="material-symbols-outlined google_icon_filled">
                delete_forever
              </span>
            </span>
          </div>
          <div className="delete_card_btm_div" onClick={restoreCard}>
            <span className="material-symbols-outlined ml_ico nav_icon google_icon_filled">
              restore_from_trash
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCard;
