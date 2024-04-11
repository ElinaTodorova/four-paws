import { useEffect, useState } from "react";
import AnimalsCategory from "./animalsCategory/AnimalsCategory";

import "./Home.sass";
import Carrousel from "./carrousel/Carrousel";

export default function Home() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/animals`)
        .then((res) => res.json())
        .then((data) => setAnimals(data))
        .catch((err) => console.error(err));
    };

    fetchData();
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
    </>
  );
}
