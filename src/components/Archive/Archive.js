import React from "react";
import EmptyForm from "../Form/EmptyData";
import "./Archive.css";

const Archive = () => {
  return (
    <div className="archive">
      <EmptyForm
        icon="archive"
        notesList={[]}
        content="Your archived notes appear here"
      />
    </div>
  );
};

export default Archive;
