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
      client_id: "9c785a50-ac39-4dac-af61-eb82eb80e139", //본인 클라이언트 정보를 활용해 주세요
      client_secret: "93b9698e-14a8-4462-9f76-6fe06e0250de", //본인 클라이언트 정보를 활용해 주세요
      redirect_uri: "http://localhost:3000/authResult",
      grant_type: "authorization_code",
    };

    const parsedSendData = queryString.stringify(sendData);

    const option = {
      method: "POST",
      url: "/oauth/2.0/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: parsedSendData,
    };

    axios(option).then(({ data }) => {
      console.log(data.access_token);
      console.log(data.refresh_token);
      if (data.rsp_code !== "O0001") {
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("userSeqNo", data.user_seq_no);
      } else {
        alert("인증에 실패했습니다 다시 시도해 주세요");
      }
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
