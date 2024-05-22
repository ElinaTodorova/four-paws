import { Route, Routes } from "react-router-dom";
import "./App.sass";

import Paths from "./paths/paths";
import StartPage from "./pages/start/StartPage";
import HomePage from "./pages/homePage/HomePage";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import LocationPage from "./pages/locationPage/LocationPage";
import LoginPage from "./pages/logInPage/LoginPage";

export default function App() {
  return (
    <Routes>
      <Route path={Paths.Welcome} element={<StartPage />} />
      <Route path={Paths.Home} element={<HomePage />} />
      <Route path={Paths.Categories} element={<CategoryPage />} />
      <Route path={Paths.SignUp} element={<SignUpPage />} />
      <Route path={Paths.Location} element={<LocationPage />} />
      <Route path={Paths.Login} element={<LoginPage />} />
    </Routes>
  );
}
