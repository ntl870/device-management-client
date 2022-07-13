import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import "antd/dist/antd.css";
import { Detail } from "./pages/Detail";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
