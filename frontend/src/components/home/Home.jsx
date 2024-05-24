import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import * as services from "../../services/animalsService";
import AnimalsCategory from "./animalsCategory/AnimalsCategory";
import Carrousel from "./carrousel/Carrousel";
import AboutUs from "./aboutUs/AboutUs";
import "react-toastify/dist/ReactToastify.css";

import "./Home.sass";
import { useAuthContext } from "../context/AuthContext";

export default function Home() {
  const [animals, setAnimals] = useState([]);

  const { user, isFirstLogin, setIsFirstLogin } = useAuthContext();

  useEffect(() => {
    if (isFirstLogin === true) {
      const notify = () =>
        toast.success(`Welcome back, ${user.username} !`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

      notify();
      setIsFirstLogin(false);
    }
  }, [isFirstLogin]);

  useEffect(() => {
    services
      .getAll()
      .then((result) => setAnimals(result))
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <Carrousel role="group" />
      <section className="infos_category">
        <h2>Our Categories</h2>
        <div className="category" role="list">
          <AnimalsCategory animals={animals} />
        </div>
      </section>
      <AboutUs />
      <ToastContainer />
    </>
  );
}
