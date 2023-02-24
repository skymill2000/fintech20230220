const { createCipheriv, createHmac } = require("crypto");

//단방향 암호화
const sha256Enc = (plainText) => {
  const secret = "hello";
  const hash = createHmac("sha512", secret).update(plainText).digest("base64");
  console.log(hash);
};

sha256Enc("qlalfqjsgh1234!");
