import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as services from "../../services/categoryServices";

import CategoryItem from "./categoryItem/CategoryItem";

import "./Category.sass";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const { animal } = useParams();

  useEffect(() => {
    if (animal === "dog") {
      services
        .getAllDogs()
        .then((result) => setCategories(result))
        .catch((err) => console.error(err));
    } else if (animal === "cat") {
      services
        .getAllCats()
        .then((result) => setCategories(result))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <section className="infos-categories">
      <div className="header">
        {animal === "dog" ? <h2>Dog</h2> : <h2>Cat</h2>}

        {animal === "dog" ? (
          <p>
            {" "}
            Explore our wide range of product categories designed to enhance the
            well-being and happiness of your canine companion. From premium
            nutrition to stylish accessories and everything in between, we've
            got you covered.
          </p>
        ) : (
          <p>
            At Four Paws, we understand the unique bond between you and your
            beloved cat. That's why we're dedicated to providing a diverse range
            of products tailored to meet every need and desire of your furry
            friend.
          </p>
        )}
      </div>
      <div className="allCategories">
        {categories.map((category) => (
          <CategoryItem category={category} />
        ))}
      </div>
    </section>
  );
}
