import "./App.css";
import InputComponents from "./components/InputComponent";
import ListComponents from "./components/ListComponents";
import StyledComponent from "./components/StyledComponent";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome userName="유관우" userAge={35} userHeight={175}></Welcome>
      <InputComponents></InputComponents>
      <ListComponents></ListComponents>
      <StyledComponent></StyledComponent>
    </div>
  );
}

export default App;
