import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome userName="유관우" userAge={35} userHeight={175}></Welcome>
      <Welcome userName="홍길동" userAge={20} userHeight={175}></Welcome>
      <Welcome userName="고길동" userAge={48} userHeight={175}></Welcome>
    </div>
  );
}

export default App;
