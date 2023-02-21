import React from "react";

const AxiosComponent = () => {
  const handleClick = () => {
    console.log("서버로 요청을 보냅니다.");
  };
  return (
    <div>
      <button onClick={handleClick}>데이터 통신하기</button>
    </div>
  );
};

export default AxiosComponent;
