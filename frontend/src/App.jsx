import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import "./App.sass";
import Home from "./components/home/Home";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
