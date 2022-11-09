import React from "react";
import "./MultiForm.css";
const MultiForm = (props) => {
  return (
    <div className="multi-form">
      <div className="box-01">
        <div className="box-02">
          <div className="box-03">
            <input
              type="text"
              placeholder="Title"
              onChange={props.titleChangeHandler}
            />
          </div>
          <div className="box-04">
            <span className="material-symbols-outlined nav_icon">push_pin</span>
          </div>
        </div>
        <div className="box-05">
          <input
            type="text"
            placeholder="Take a note..."
            onChange={props.contentChangeHandler}
          />
        </div>

        <div className="box-06">
          <div className="box-07">
            <div className="box-08">
              <div className="mf_box-10">
                <span className="material-symbols-outlined ml_ico nav_icon">
                  add_alert
                </span>
              </div>
              <div className="mf_box-10">
                <span className="material-symbols-outlined ml_ico nav_icon">
                  person_add
                </span>
              </div>
              <div className="mf_box-10">
                <span className="material-symbols-outlined ml_ico nav_icon">
                  palette
                </span>
              </div>
              <div className="mf_box-10">
                <span className="material-symbols-outlined ml_ico nav_icon">
                  image
                </span>
              </div>
              <div className="mf_box-10">
                <span className="material-symbols-outlined ml_ico nav_icon">
                  archive
                </span>
              </div>
              <div className="mf_box-10">
                <span className="material-symbols-outlined nav_icon">
                  more_vert
                </span>
              </div>
              <div className="mf_box-10">
                <span className="material-symbols-outlined nav_icon">undo</span>
              </div>
              <div className="mf_box-10">
                <span className="material-symbols-outlined nav_icon">redo</span>
              </div>
            </div>
          </div>
          <div className="box-09" onClick={props.toggleEditStateHandler}>
            <button>close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiForm;
