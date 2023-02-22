import { useState } from "react";

const InputComponents = ({ handleChange, handleClick }) => {
  return (
    <>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>입력</button>
      <select>
        <option>최신순</option>
        <option>인기순</option>
      </select>
    </>
  );
};

export default InputComponents;
