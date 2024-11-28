import React from 'react';
import './App.css'; // Asegúrate de importar tu archivo CSS

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Mi Tienda</h1>
        <ul className="navbar">
          <li>Inicio</li>
          <li>Quienes Somos</li>
          <li>Tienda</li>
          <li>Carrito</li>
        </ul>
      </header>

      <div className="product-card">
        <img src="https://via.placeholder.com/220x150" alt="Producto 1" />
        <h3>Producto 1</h3>
        <p>$29.99</p>
        <button>Agregar al carrito</button>
      </div>

      <div className="product-card">
        <img src="https://via.placeholder.com/220x150" alt="Producto 2" />
        <h3>Producto 2</h3>
        <p>$49.99</p>
        <button>Agregar al carrito</button>
      </div>

      <div className="product-card">
        <img src="https://via.placeholder.com/220x150" alt="Producto 3" />
        <h3>Producto 3</h3>
        <p>$69.99</p>
        <button>Agregar al carrito</button>
      </div>

      <div className="product-card">
        <img src="https://via.placeholder.com/220x150" alt="Producto 4" />
        <h3>Producto 4</h3>
        <p>$99.99</p>
        <button>Agregar al carrito</button>
      </div>

      <footer>
        <p>© 2024 Mi Tienda | Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;







