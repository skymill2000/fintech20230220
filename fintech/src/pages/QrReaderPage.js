import React, { useState } from "react";
import AppHeader from "../components/Common/AppHeader";
import { QrReader } from "react-qr-reader";
import ModalWithdraw from "../components/Withdraw/ModalWithdraw";
import Modal from "react-modal";

const QrReaderPage = () => {
  const [data, setData] = useState("120230044088951024630415");
  const [openModal, setOpenModal] = useState(true); //no camera : true
  const CustomStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: "9",
    },
    content: {
      width: "95%",
      border: `0 solid black`,
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: "99999",
    },
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <AppHeader title={"QR 읽기"}></AppHeader>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            setOpenModal(true);
          }
          if (!!error) {
          }
        }}
        style={{ width: "100%" }}
      />
      <p>{data}</p>

      <Modal
        isOpen={openModal}
        style={CustomStyles}
        onRequestClose={closeModal}
      >
        <ModalWithdraw tofintechno={data}></ModalWithdraw>
      </Modal>
    </>
  );
};

export default QrReaderPage;
