import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./Labels.css";
const Labels = (props) => {
  const overLayRef = useRef();

  const closeModal = (e) => {
    if (overLayRef.current === e.target) {
      props.renderLabelComponentHandler();
    }
  };

  return ReactDOM.createPortal(
    <div className="labels" ref={overLayRef} onClick={closeModal}>
      <div className="label_modal">
        <div className="label_modal_title">Edit labels</div>
        <div className="label_modal_content">
          <span className="material-symbols-outlined label__icon">close</span>
          <input type="text" placeholder="create new Label" />
          <span className="material-symbols-outlined label__icon">done</span>
        </div>
        <div
          className="label_modal_footer"
          onClick={props.renderLabelComponentHandler}
        >
          <span className="label_footer_content">Done</span>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Labels;
