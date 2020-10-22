import React, { useState } from 'react';
import Button from '../Button';

const MarkdownInput = ({ onSubmit }) => {
  const [input, setInput] = useState({})

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  return (
    <form className="d-flex flex-column m-3" onSubmit={(e) => onSubmit(e, input)}>
      <input className="m-3 p-2" name="title" type="text" onChange={handleInputChange}></input>
      <textarea className="m-3 p-3" name="text" type="text" rows="10" onChange={handleInputChange}></textarea>
      <Button className="m-3 btn btn-danger align-self-start" name="Sauvegarder" type="submit"/>
    </form>
  );
};

export default MarkdownInput;
