import { Route, Routes } from "react-router";
import { HomePage } from "./components/HomePage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/checkout" element={<>testing</>} />
      </Routes>
    </>
  );
}

export default App;
