import React, { useState, useEffect } from "react";
import EmptyForm from "../Form/EmptyData";
import "./Archive.css";
import axios from "../axios";
import ArchiveCard from "../Card/ArchiveCard";

const Archive = () => {
  const [archivedList, setArchivedList] = useState([]);
  const [error, setError] = useState("");

  const fetchArchieveDatafromAPI = () => {
    axios
      .get("/archive")
      .then((res) => {
        // console.log("🚀 ~ file: Archive.js:12 ~ .then ~ res:", res.data);
        setArchivedList(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  function moveCardToTrashHandler(id) {
    axios
      .delete(`trash/${id}`)
      .then((res) => {
        console.log(res);
        fetchArchieveDatafromAPI();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const unArchiveNotesHandler = (id) => {
    axios
      .put(`unarchive/${id}`)
      .then((res) => {
        setArchivedList(res.data);
        fetchArchieveDatafromAPI();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  function createCard() {
    return (
      <div className={`Archive_showData`}>
        {archivedList.map((data) => {
          return (
            <ArchiveCard
              title={data.title}
              content={data.content}
              key={data.id}
              id={data.id}
              unArchiveNotesHandler={unArchiveNotesHandler}
              moveCardToTrashHandler={moveCardToTrashHandler}
            />
          );
        })}
      </div>
    );
  }

  useEffect(() => {
    fetchArchieveDatafromAPI();
  }, []);

  return (
    <div className="archive">
      {archivedList == undefined || archivedList.length < 1 ? (
        <EmptyForm
          icon="archive"
          notesList={[]}
          content="Your archived notes appear here"
        />
      ) : (
        createCard()
      )}
    </div>
  );
};

export default Archive;
