import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.div`
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid #000;
`;

const AppHeader = ({ title }) => {
  return <HeaderBlock>{title}</HeaderBlock>;
};

export default AppHeader;
