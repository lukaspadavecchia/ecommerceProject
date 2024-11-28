// src/components/ProductDetails.jsx
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();

  const product = {
    1: { name: 'Producto 1', description: 'Descripción completa del Producto 1', imgUrl: 'product1.jpg' },
    2: { name: 'Producto 2', description: 'Descripción completa del Producto 2', imgUrl: 'product2.jpg' },
    3: { name: 'Producto 3', description: 'Descripción completa del Producto 3', imgUrl: 'product3.jpg' },
  }[id];

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.imgUrl} alt={product.name} className="product-detail-img" />
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
