import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import axios from "axios";
import ModalCard from "./ModalCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalWithdrawBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #dfdfdf solid;
`;

const ModalWithdraw = ({ tofintechno }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [acountList, setAccountList] = useState([]);

  useEffect(() => {
    getAccountList();
  }, []);

  const getAccountList = () => {};

  return (
    <ModalWithdrawBlock>
      <Slider {...settings}>
        {acountList.map((account) => {
          return (
            <ModalCard
              key={account.fintech_use_num}
              bankName={account.bank_name}
              fintechUseNo={account.fintech_use_num}
              tofintechno={tofintechno}
            ></ModalCard>
          );
        })}
      </Slider>
    </ModalWithdrawBlock>
  );
};

export default ModalWithdraw;
