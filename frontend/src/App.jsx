import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import "./App.sass";
import Welcome from "./components/welcome/Welcome";

import Paths from "./paths/paths";
import HomePage from "./pages/Home/HomePage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={Paths.Home} element={<Welcome />} />
        <Route path={Paths.Welcome} element={<HomePage />} />
      </Routes>
    </>
  );
}
