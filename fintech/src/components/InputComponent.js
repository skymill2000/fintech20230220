import { useState } from "react";

const InputComponents = ({ handleChange }) => {
  return (
    <>
      <input onChange={handleChange}></input>
      <button>입력</button>
    </>
  );
};

export default InputComponents;
