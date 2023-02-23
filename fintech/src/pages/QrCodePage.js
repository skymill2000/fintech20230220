import React from "react";
import AppHeader from "../components/Common/AppHeader";
import { QRCodeSVG } from "qrcode.react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const QrCodePage = () => {
  const search = useLocation().search;
  const fintechUseNo = queryString.parse(search).fintechUseNo;

  return (
    <div>
      <AppHeader title={"QR 코드 생성"}></AppHeader>
      <QRBlock>
        <QRCodeSVG size={200} value={fintechUseNo}></QRCodeSVG>
        <p>fintech 번호 : {fintechUseNo}</p>
      </QRBlock>
    </div>
  );
};

export default QrCodePage;
