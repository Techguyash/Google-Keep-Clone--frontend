import React from "react";
import "./Remainder.css";

const RemainderMenu = () => {
  return (
    <div className="Remainder_body">
      <div className="Remainder_title">
        <span>Remainder :</span>
      </div>
      <div className="Remainder_menus">
        <div className="Remainder_menu">
          <div className="Remainder_label"> Late Today</div>

          <div className="Remainder_time">8:00 PM</div>
        </div>
        <div className="Remainder_menu">
          <div className="Remainder_label"> Tomorrow</div>

          <div className="Remainder_time">10:00 AM</div>
        </div>
        <div className="Remainder_menu">
          <div className="Remainder_label"> Next Week</div>

          <div className="Remainder_time">Mon, 10:00 AM</div>
        </div>
        <div className="Remainder_menu_ico">
          <span class="material-symbols-outlined rem_ico">schedule</span>
          <div className="Remainder_label"> Pick Date and Time</div>
        </div>
        <div className="Remainder_menu_ico">
          <span class="material-symbols-outlined rem_ico rem_ico_fill">
            location_on
          </span>
          <div className="Remainder_label"> Pick place</div>
        </div>
      </div>
    </div>
  );
};

export default RemainderMenu;
