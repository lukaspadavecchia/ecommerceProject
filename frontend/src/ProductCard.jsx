    import PropTypes from 'prop-types';

function ProductCard({ description, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={description} />
      <p>{description}</p>
    </div>
  );
}

ProductCard.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;  // Asegúrate de exportarlo correctamente

