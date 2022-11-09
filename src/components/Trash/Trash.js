import React, { useState, useEffect } from "react";
import DeleteCard from "../Card/DeleteCard";
import EmptyForm from "../Form/EmptyData";
import "./Trash.css";
import axios from "../axios";

const Trash = () => {
  const [trashList, setTrashList] = useState([]);

  function createDeleteCards() {
    return trashList.map((data) => {
      return (
        <DeleteCard
          title={data.title}
          content={data.content}
          key={data.id}
          id={data.id}
          deleteNoteForeverHandler={deleteNoteForeverHandler}
          restoreDeletedNote={restoreDeletedNote}
        />
      );
    });
  }

  function restoreDeletedNote(id) {
    axios
      .put(`/trash/${id}`)
      .then((res) => {
        fetchDatafromAPI();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteNoteForeverHandler(id) {
    axios
      .delete(`/trash/forever/${id}`)
      .then((res) => {
        fetchDatafromAPI();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function fetchDatafromAPI() {
    axios
      .get("/trash")
      .then((res) => {
        // console.log(res.data.data);
        setTrashList(res.data.data);
      })
      .catch((err) => {});
  }

  useEffect(() => {
    fetchDatafromAPI();
  }, []);

  return (
    <>
      <div className="trash">
        <h3 className="trash_message">
          Notes in Trash are deleted after 7 days.{" "}
          <span className="empty_trash_text">Empty Trash</span>
        </h3>
        {trashList.length < 1 ? (
          <EmptyForm icon="delete" notesList={[]} content="No notes in Trash" />
        ) : (
          <div className="trash_showData">{createDeleteCards()}</div>
        )}
      </div>
    </>
  );
};

export default Trash;
