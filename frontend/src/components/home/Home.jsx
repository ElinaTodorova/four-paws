import { useEffect, useState } from "react";
import AnimalsCategory from "./animalsCategory/AnimalsCategory";
import Carrousel from "./carrousel/Carrousel";
import * as services from "../../services/animalsService";

import "./Home.sass";
import AboutUs from "./aboutUs/AboutUs";

export default function Home() {
  const [animals, setAnimals] = useState([]);

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
    </>
  );
}
