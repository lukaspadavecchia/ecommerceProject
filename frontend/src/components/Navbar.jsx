// src/components/Navbar.jsx

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Mi Tienda</a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/about">Quienes Somos</a></li>
        <li><a href="/shop">Tienda</a></li>
        <li><a href="/cart">Carrito</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
