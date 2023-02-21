import React from "react";
import axios from "axios";

const AxiosComponent = () => {
  const handleClick = () => {
    console.log("서버로 요청을 보냅니다.");
    const requestUrl = "https://naver.com";
    axios.get(requestUrl).then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <button onClick={handleClick}>데이터 통신하기</button>
    </div>
  );
};

export default AxiosComponent;
