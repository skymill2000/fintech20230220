import logo from "./logo.svg";
import "./App.css";

const Welcome = () => {
  return (
    <p>
      안<b>녕</b>하세요
    </p>
  );
};

function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
    </div>
  );
}

export default App;
