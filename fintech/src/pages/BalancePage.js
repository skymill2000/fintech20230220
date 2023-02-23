import axios from "axios";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BalanceCard from "../components/Balance/BalanceCard";
import TransactionList from "../components/Balance/TransactionList";
import AppHeader from "../components/Common/AppHeader";

const BalancePage = () => {
  const search = useLocation().search;
  const fintechUseNo = queryString.parse(search).fintechUseNo;

  const [balance, setBalance] = useState({});
  const [transactionList, setTrasactionList] = useState([]);

  useEffect(() => {
    getBalance();
    getTransactionList();
  }, []);

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    const clientNo = "M202300440";
    let transId = clientNo + "U" + countnum; //이용기관번호 본인것 입력
    return transId;
  };

  const getBalance = () => {
    /**
     * #work5 잔액조회 api 활용해서 데이터 조회하기
     * 핀테크 번호 balance?fintechUseNo=120220156488941132290860 여기에 핀테크 번호가 있습니다.
     * queryString Parsing 데이터를 가지고 오세요 (AuthResult)
     * 날짜는 그냥 고정값으로 오늘 날짜
     * axios option 통해서 데이터를 조회
     * BalanceCard 렌더링 해주세요 !
     */
    const accessToken = localStorage.getItem("accessToken");

    const option = {
      method: "GET",
      url: "/v2.0/account/balance/fin_num",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        bank_tran_id: genTransId(),
        fintech_use_num: fintechUseNo,
        tran_dtime: "20230223114800",
      },
    };
    axios(option).then(({ data }) => {
      console.log(data);
      setBalance(data);
    });
  };

  /**
   * #work6 거래내역 조회 api 활용해서 데이터 조회하기
   */
  const getTransactionList = () => {
    const accessToken = localStorage.getItem("accessToken");

    const option = {
      method: "GET",
      url: "/v2.0/account/transaction_list/fin_num",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        bank_tran_id: genTransId(),
        fintech_use_num: fintechUseNo,
        inquiry_type: "A",
        inquiry_base: "D",
        from_date: "20230223",
        to_date: "20230223",
        sort_order: "D",
        tran_dtime: "20230223114800",
      },
    };
    axios(option).then(({ data }) => {
      console.log(data);
      setTrasactionList(data.res_list);
    });
  };

  return (
    <div>
      <AppHeader title={"잔액조회"}></AppHeader>
      <BalanceCard
        bankName={balance.bank_name}
        fintechNo={fintechUseNo}
        balance={balance.balance_amt}
      ></BalanceCard>
      <TransactionList transactionList={transactionList}></TransactionList>
    </div>
  );
};

export default BalancePage;
