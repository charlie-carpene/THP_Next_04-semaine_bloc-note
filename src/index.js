import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import Button  from "./components/Button";
import MarkdownInput from "./components/MarkdownInput";
import NoteDisplay from "./components/NoteDisplay";
import NotesContainer from "./components/NotesContainer";

import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [currentNote, setCurrentNote] = useState({});
  const [allNotes, setAllNotes] = useState(JSON.parse(localStorage.getItem('notes')));

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(allNotes));
  }, [allNotes]);

  const handleSubmit = (e, input) => {
    e.preventDefault();
    setCurrentNote(input);
    setAllNotes([
      ...allNotes,
      input
    ]);
  };

  const showNote = (e, index) => {
    setCurrentNote(allNotes[index]);
  };

  return (
    <div className="d-flex flex-row min-vh-100">
      <div className="w-25 bg-dark d-flex flex-column">
        <Button name="Ajouter une note" className="m-3 btn btn-danger align-self-center" />
        <NotesContainer allNotes={allNotes} showNote={showNote} />
      </div>
      <div className="w-75 ml-1 bg-dark">
        <NoteDisplay note={currentNote} />
        <MarkdownInput onSubmit={handleSubmit}/>
      </div>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector("#root"));
