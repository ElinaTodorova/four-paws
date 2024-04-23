import PropTypes from "prop-types";
import "./AnimalCategory.sass";
import { Link } from "react-router-dom";
import Paths from "../../../paths/paths";
import pathToUrl from "../../../utils/pathsToUrl";

export default function AnimalsCategory({ animals }) {
  return (
    <>
      {animals.map((animal) => (
        <Link to={pathToUrl(Paths.Categories, { animal: animal.name_animal })}>
          <div className="animalsInfo">
            <img src={animal.image_url} alt={animal.name_animal} />
            <h3>{animal.name_animal}</h3>
          </div>
        </Link>
      ))}
    </>
  );
}

AnimalsCategory.propTypes = {
  animals: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string.isRequired,
      name_animal: PropTypes.string.isRequired,
    })
  ).isRequired,
};
