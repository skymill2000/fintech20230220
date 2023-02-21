import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #1c6ea4;
  background: -moz-linear-gradient(left, #1c6ea4 0%, #2388cb 50%, #144e75 100%);
  background: -webkit-linear-gradient(
    left,
    #1c6ea4 0%,
    #2388cb 50%,
    #144e75 100%
  );
  background: linear-gradient(to right, #1c6ea4 0%, #2388cb 50%, #144e75 100%);
  -webkit-box-shadow: 3px 9px 6px 5px #000000;
  box-shadow: 3px 9px 6px 5px #000000;
`;

const StyledComponent = () => {
  return (
    <div>
      <Button>스타일드 컴포넌트로 만든 버튼 입니다.</Button>
    </div>
  );
};

export default StyledComponent;
