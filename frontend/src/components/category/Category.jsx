import { useEffect, useState } from "react";
import * as services from "../../services/categoryServices";

import CategoryItem from "./categoryItem/CategoryItem";

import "./Category.sass";

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    services
      .getAll()
      .then((result) => setCategories(result))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section>
      <div className="header">
        <h2>Dog</h2>
        <p>
          Explore our wide range of product categories designed to enhance the
          well-being and happiness of your canine companion. From premium
          nutrition to stylish accessories and everything in between, we've got
          you covered.
        </p>
      </div>
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </section>
  );
}
