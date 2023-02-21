import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: grey;
`;

const StyledComponent = () => {
  return (
    <div>
      <Button>스타일드 컴포넌트로 만든 버튼 입니다.</Button>
    </div>
  );
};

export default StyledComponent;
