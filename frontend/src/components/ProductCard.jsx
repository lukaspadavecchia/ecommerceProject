// src/components/ProductCard.jsx

function ProductCard({ image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;
