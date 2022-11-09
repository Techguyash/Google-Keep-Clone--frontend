import React from "react";
import "./EmptyData.css";

const EmptyForm = (props) => {
  return (
    <div className={`notes-empty-content`}>
      <span className="material-symbols-outlined notes-ico">{props.icon}</span>
      <h2 className="notes-empty-text">{props.content}</h2>
    </div>
  );
};

export default EmptyForm;
