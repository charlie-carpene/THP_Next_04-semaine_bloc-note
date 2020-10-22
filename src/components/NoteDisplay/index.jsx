import React from 'react';
import Showdown from "showdown";

const converte = new Showdown.Converter();

const NoteDisplay = ({ note }) => {

  const convertor = () => {
    return {__html: converte.makeHtml(note.text)};
  };

  return (
    <div className="m-3">
      <h1 className="m-3 text-danger">{note.title}</h1>
      <div className="m-3 text-white" dangerouslySetInnerHTML={convertor()} />
    </div>
  )
};

export default NoteDisplay;
