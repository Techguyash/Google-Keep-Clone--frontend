import React from "react";
import "./Menu.css";

const Menu = (props) => {
  function moveTrash() {
    console.log("Menu");
    console.log(props.id);
    props.moveCardToTrashHandler(props.id);
  }

  return (
    <div className="card-menu">
      <div className="card-menu__content">
        <div className="card-menu__item" onClick={moveTrash}>
          Delete Note
        </div>
        <div className="card-menu__item">Add Label</div>
        <div className="card-menu__item">Add Drawing</div>
        <div className="card-menu__item">Make a copy</div>
        <div className="card-menu__item">Show checkbox</div>
        <div className="card-menu__item">Copy to Google docs</div>
      </div>
    </div>
  );
};

export default Menu;
