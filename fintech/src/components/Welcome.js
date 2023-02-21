const Welcome = (props) => {
  console.log(props);
  return (
    <p>
      안녕하세요! {props.userAge}세 {props.userHeight}cm {props.userName} 님 !
    </p>
  );
};

export default Welcome;
