import React from "react";
import { useLocation } from "react-router-dom";
import AppHeader from "../components/Common/AppHeader";
import queryString from "query-string";
import axios from "axios";

const AuthResultPage = () => {
  const code = useLocation().search;
  const authCode = queryString.parse(code).code;

  const handleAuthButtonClick = () => {
    let sendData = {
      code: authCode,
      client_id: "e530acfa-5f42-4cc6-8823-e3bd59f9bd2e", //본인 클라이언트 정보를 활용해 주세요
      client_secret: "98240f4b-20f8-46f0-b507-8619d6023e6f", //본인 클라이언트 정보를 활용해 주세요
      redirect_uri: "http://localhost:3000/authResult",
      grant_type: "authorization_code",
    };

    const option = {
      method: "POST",
      url: "https://testapi.openbanking.or.kr/oauth/2.0/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: sendData,
    };

    axios(option).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <AppHeader title={"인증완료 / 토큰 요청"}></AppHeader>
      사용자 authCode : {authCode}
      <button onClick={handleAuthButtonClick}>AccessToken 요청</button>
    </div>
  );
};

export default AuthResultPage;
