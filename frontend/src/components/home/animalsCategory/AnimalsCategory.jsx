import PropTypes from "prop-types";
import "./AnimalCategory.sass";

export default function AnimalsCategory({ animals }) {
  return (
    <div className="animalsInfo">
      {animals.map((animal) => (
        <div>
          <img src={animal.image_url} alt={animal.name_animal} />
          <h3>{animal.name_animal}</h3>
        </div>
      ))}
    </div>
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
