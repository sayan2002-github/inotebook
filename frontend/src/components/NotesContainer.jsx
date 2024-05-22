import React from "react";
import { useSelector } from "react-redux";
import NoteItem from "./NoteItem";
import "./Components.css";

const NotesContainer = () => {
  const { notes } = useSelector((state) => state.noteDetails);

  return (
    <>
      <h2 className="text-center" style={{textDecoration: "underline"}}>Your Notes</h2>
      <div className="notes-container">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            title={note.title}
            description={note.description}
            tags={note.tags}
          />
        ))}
      </div>
    </>
  );
};

export default NotesContainer;
