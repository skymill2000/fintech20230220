import logo from "./logo.svg";
import "./App.css";

const Welcome = (props) => {
  console.log(props);
  return (
    <p>
      안녕하세요! {props.userAge}세 {props.userHeight}cm {props.userName} 님 !
    </p>
  );
};

function App() {
  return (
    <div className="App">
      <Welcome userName="유관우" userAge={35} userHeight={175}></Welcome>
    </div>
  );
}

export default App;
