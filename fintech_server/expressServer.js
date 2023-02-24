const express = require("express");
const axios = require("axios");
const port = 3000;
const app = express();
const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAwMDM0NzM2Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE2ODQ4OTYyODcsImp0aSI6IjEwNDFiMmE4LTM5ZmMtNDg2NC04YzQwLWM2NWI4ZjBiODRhYyJ9.muvvn9dl_SR-dzY0Il5-v3-RCPZpiVWBuGfU_1EsT6k"; //데이터베이스 에서 가져온 혹은 클라이언트에서 전달받은 accessToken

app.get("/", function (req, res) {
  console.log("사용자의 요청이 발생했습니다.");
  res.send("Hello World");
});

app.get("/user", (req, res) => {
  res.json("get method");
});

app.post("/user", (req, res) => {
  res.json("post method");
});

app.delete("/user", (req, res) => {
  res.json("delete method");
});

app.put("/user", (req, res) => {
  res.json("put method");
});

app.get("/transaction", (req, res) => {
  console.log(req);
  const option = {
    method: "GET",
    url: "https://testapi.openbanking.or.kr/v2.0/account/transaction_list/fin_num",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      bank_tran_id: genTransId(),
      fintech_use_num: "120230044088951024630415",
      inquiry_type: "A",
      inquiry_base: "D",
      from_date: "20230223",
      to_date: "20230223",
      sort_order: "D",
      tran_dtime: "20230223114800",
    },
  };
  axios(option).then(({ data }) => {
    //mysql 데이터 입력 쿼리
    res.json(data);
  });
});

app.get("/final", function (req, res) {});

const genTransId = () => {
  let countnum = Math.floor(Math.random() * 1000000000) + 1;
  const clientNo = "M202300440";
  let transId = clientNo + "U" + countnum; //이용기관번호 본인것 입력
  return transId;
};

const makeAES = (plainText) => {
  const key = "A1#tsq3AY5Tq#hGkh#UwAkq3TKk3s436";
  const iv = "ZREW4xGsHK5YwTqs";
  const cipher = createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(plainText, "utf8", "base64");
  encrypted += cipher.final("base64");
  console.log("aes-256-cbc 방식으로 암호화한 값 : ", encrypted);
  return encrypted;
};

app.listen(port);
console.log(`http://localhost:${port}`);
