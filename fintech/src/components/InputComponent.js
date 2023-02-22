import { useState } from "react";

const InputComponents = ({ handleChange, handleClick }) => {
  return (
    <>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>입력</button>
    </>
  );
};

export default InputComponents;
