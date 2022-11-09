import React from "react";
import "./SingleForm.css";
const SingleForm = (props) => {
  return (
    <div className="create-note">
      <input
        type="text"
        placeholder="Take a note..."
        className="create-note-input"
        onFocus={props.activateEditStateHandler}
      />
      <div className="create-note-icon">
        <span className="material-symbols-outlined nav_icon">check_box</span>
        <span className="material-symbols-outlined nav_icon">brush</span>
        <span className="material-symbols-outlined nav_icon">image</span>
      </div>
    </div>
  );
};

export default SingleForm;
