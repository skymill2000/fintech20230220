import { useState } from "react";

const InputComponents = (props) => {
  const value = "test";
  const [name, setName] = useState("test");
  return <p>{value}</p>;
};

export default InputComponents;
