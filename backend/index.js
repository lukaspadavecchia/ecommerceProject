// index.js en la carpeta backend

const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('¡Bienvenido al backend de tu ecommerce!');
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
