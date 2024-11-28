// src/components/Home.jsx
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', imgUrl: 'product1.jpg' },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', imgUrl: 'product2.jpg' },
    { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', imgUrl: 'product3.jpg' },
  ];

  return (
    <div className="home">
      <h2>Productos destacados</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgUrl} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link to={`/producto/${product.id}`} className="product-link">
              Ver más
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
