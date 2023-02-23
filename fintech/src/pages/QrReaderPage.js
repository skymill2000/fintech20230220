import React, { useState } from "react";
import AppHeader from "../components/Common/AppHeader";
import { QrReader } from "react-qr-reader";

const QrReaderPage = () => {
  const [data, setData] = useState("No result");

  return (
    <div>
      <AppHeader title={"QR 코드 리더기"}></AppHeader>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </div>
  );
};

export default QrReaderPage;
