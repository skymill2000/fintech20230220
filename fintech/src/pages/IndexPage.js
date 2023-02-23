import React from "react";
import styled from "styled-components";
import AppHeader from "../components/Common/AppHeader";

const AuthButton = styled.button`
  margin-top: 100px;
  width: 100%;
`;

const IndexPage = () => {
  const handleClick = () => {
    let tmpwindow = window.open("about:blank");
    const clientId = "9c785a50-ac39-4dac-af61-eb82eb80e139"; //<-- 본인의 client id 를 입력해주세요
    tmpwindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
  };

  return (
    <div>
      <AppHeader title={"인증시작"}></AppHeader>
      <AuthButton onClick={handleClick}>인증 사이트로 이동</AuthButton>
    </div>
  );
};

export default IndexPage;
