import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Radio, ConfigProvider } from "antd";

import * as services from "../../services/categoryServices";
import * as animalServices from "../../services/animalsService";

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
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#00b96b",
            borderRadius: 2,
          },
        }}
      >
        <Radio.Group
          defaultValue="a"
          className="radio-group"
          buttonStyle="solid"
        >
          {categories.map((categorie) => (
            <Radio.Button
              className="radio-btn"
              value={categorie.category}
              buttonSolidCheckedActiveBg="red"
            >
              {categorie.category}
            </Radio.Button>
          ))}
        </Radio.Group>
      </ConfigProvider>
    </section>
  );
}
