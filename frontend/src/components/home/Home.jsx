import { useEffect, useState } from "react";
import * as services from "../../servicesRaquest/categoryServices";
import AnimalsCategory from "./animalsCategory/AnimalsCategory";

import "./Home.sass";
import Carrousel from "./carrousel/Carrousel";

export default function Home() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    services
      .getAllAnimals()
      .then((result) => setAnimals(result))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Carrousel />
      <section className="infos_category">
        <h2>Our Categories</h2>
        <div className="category">
          <AnimalsCategory animals={animals} />
        </div>
      </section>
    </>
  );
}
