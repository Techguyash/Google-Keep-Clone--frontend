import "./Notes.css";
import MultiForm from "../Form/MultiForm";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import EmptyForm from "../Form/EmptyData";
import SingleForm from "../Form/SingleForm";
import axios from "../axios";

const Notes = (props) => {
  const [notesList, setnotesList] = useState([]);
  const [editActive, setEditActive] = useState(false);
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [error, setError] = useState("");

  function activateEditStateHandler() {
    setEditActive(true);
  }

  function toggleEditStateHandler() {
    if (content !== undefined && content.length > 0) {
      let inpTitle;
      title.length > 0 ? (inpTitle = title) : (inpTitle = content);

      const data = {
        title: inpTitle,
        content: content,
      };

      // console.log(data);
      axios
        .post("/", data)
        .then((res) => {
          console.log(res);
          setnotesList([data, ...notesList]);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
    setEditActive(false);
    settitle("");
    setcontent("");
  }

  function titleChangeHandler(event) {
    settitle(event.target.value);
  }

  function contentChangeHandler(event) {
    setcontent(event.target.value);
  }

  function fetchDatafromAPI() {
    axios
      .get("/")
      .then((res) => {
        console.log(res.data.data);
        setnotesList(res.data.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  function moveCardToTrashHandler(id) {
    axios
      .delete(`/trash/${id}`)
      .then((res) => {
        console.log(res);
        fetchDatafromAPI();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function createCard() {
    return (
      <div className={`Notes_showData`}>
        {notesList.map((data) => {
          return (
            <Card
              title={data.title}
              content={data.content}
              key={data.id}
              id={data.id}
              moveCardToTrashHandler={moveCardToTrashHandler}
            />
          );
        })}
      </div>
    );
  }

  useEffect(() => {
    fetchDatafromAPI();
  }, []);

  return (
    <div className="notes">
      <div className={` ${!editActive ? "notes-header" : "notes-header-max"}`}>
        {!editActive ? (
          <SingleForm activateEditStateHandler={activateEditStateHandler} />
        ) : (
          <MultiForm
            toggleEditStateHandler={toggleEditStateHandler}
            titleChangeHandler={titleChangeHandler}
            contentChangeHandler={contentChangeHandler}
          />
        )}
      </div>
      <div className={`notes-footer`} onClick={toggleEditStateHandler}>
        {notesList.length < 1 ? (
          <EmptyForm
            icon={props.icon}
            notesList={notesList}
            content={props.content}
          />
        ) : (
          createCard()
        )}
      </div>
    </div>
  );
};

export default Notes;

// <>
// {!error ? (
//   <LoadedData />
// ) : (
//   <h1 style={errorStyle}>{error}, Please try after Sometimes</h1>
// )}
// </>
