function sum(p1, p2) {
  return p1 + p2;
}

console.log(sum(2, 3));
// 함수를 1급 객체로 취급한다.
console.log(sum);

const sum2 = function (p1, p2) {
  return p1 + p2;
};

console.log(sum2(4, 6));

const sumWithArrowFunc = (p1, p2) => {
  return p1 + p2;
};

console.log(sumWithArrowFunc(2, 3));

//#work01 : 나누기 빼기, 곱하기 기능을 화살표 함수로 선언 바랍니다.
const div = (p1, p2) => {
  return p1 / p2;
};

const minus = (p1, p2) => {
  return p1 - p2;
};

const mul = (p1, p2) => {
  return p1 * p2;
};

console.log(div(6, 2));
console.log(minus(6, 2));
console.log(mul(6, 2));
