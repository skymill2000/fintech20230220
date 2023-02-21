import { useState } from "react";

const InputComponents = (props) => {
  const value = "test";
  const [name, setName] = useState("test");
  const handleChangeInput = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <p>{value}</p>
      <input onChange={handleChangeInput}></input>
      <button>입력</button>
    </>
  );
};

export default InputComponents;
