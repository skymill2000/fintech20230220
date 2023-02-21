import "./App.css";
import InputComponents from "./components/InputComponent";
import ListComponents from "./components/ListComponents";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome userName="유관우" userAge={35} userHeight={175}></Welcome>
      <InputComponents></InputComponents>
      <ListComponents></ListComponents>
    </div>
  );
}

export default App;
