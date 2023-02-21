import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputComponents from "./components/InputComponent";
import Welcome from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/input" element={<InputComponents />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
