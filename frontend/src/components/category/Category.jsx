import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as services from "../../services/categoryServices";
import * as animalServices from "../../services/animalsService";
import CategoryItem from "./categoryItem/CategoryItem";

import "./Category.sass";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [animalData, setAnimalData] = useState({});

  const { animal } = useParams();

  useEffect(() => {
    services
      .getAll(animal)
      .then((result) => setCategories(result))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    animalServices
      .getByAnimal(animal)
      .then((result) => setAnimalData(result))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="infos-categories">
      <div className="header">
        <h2>{animalData.name_animal}</h2>

        <p>{animalData.description_category}</p>
      </div>
      <div className="allCategories">
        {categories.map((category) => (
          <CategoryItem key={category.category} category={category} />
        ))}
      </div>
    </section>
  );
}
