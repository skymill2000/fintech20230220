import { useState } from "react";

const InputComponents = (props) => {
  const [name, setName] = useState("test");
  const handleChangeInput = (event) => {
    setName(event.target.value);
  };

  const handleClickButton = () => {
    alert(name);
  };

  return (
    <>
      <p>{name}</p>
      <input onChange={handleChangeInput}></input>
      <button onClick={handleClickButton}>입력</button>
    </>
  );
};

export default InputComponents;
