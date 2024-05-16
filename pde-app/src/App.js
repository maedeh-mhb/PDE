import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./Components/Public/Main/MainLayout";


function App() {
  return (
    <BrowserRouter >
      <MainLayout/>
    </BrowserRouter>
  );
}

export default App;
