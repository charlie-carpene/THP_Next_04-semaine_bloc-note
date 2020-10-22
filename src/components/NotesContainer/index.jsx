import React, { useState } from 'react';

const NotesContainer = ({ allNotes, showNote })  => {
  console.log(allNotes);

  const showNotes = () => {
    return allNotes.map((note, index) => {
      console.log(note);
      return (
        <div id={index} className="m-3 border border-danger" style={{cursor: "pointer"}} onClick={(e) => {showNote(e, index)}}>
          <h2 className="text-danger">{note.title}</h2>
          <p className="mb-5 text-white">{note.text}</p>
        </div>
      )
    }
  )};

  return (
    <div>{showNotes()}</div>
  )
};

export default NotesContainer;
