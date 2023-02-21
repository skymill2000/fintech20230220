import React, { useState } from "react";
import axios from "axios";

const AxiosComponent = () => {
  const [data, setData] = useState();

  const handleClick = () => {
    console.log("서버로 요청을 보냅니다.");
    const requestUrl = "https://www.youtube.com";
    axios.get(requestUrl).then((response) => {
      console.log(response);
      setData(response.data);
    });
  };
  return (
    <div>
      <button onClick={handleClick}>데이터 통신하기</button>
      <p>{data}</p>
    </div>
  );
};

export default AxiosComponent;
