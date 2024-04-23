import PropTypes from "prop-types";
import "./CategoryItem.sass";

export default function CategoryItem({ category }) {
  return (
    <div className="category">
      <h2>{category.category}</h2>
      <img src={category.image_category} alt={category.category} />
    </div>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      image_category: PropTypes.string.isRequired,
    })
  ).isRequired,
};
