const express = require('express');
const cors = require('cors');
const countryRoutes = require('./routes/countryRoutes');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
// Use a port other than 5000 to avoid conflict with macOS AirPlay Receiver (which returns 403)
const PORT = process.env.PORT || 3001;
// Middleware - explicit CORS so frontend on another port can call the API
app.use(
  cors({
    origin: true, // reflect request origin (any localhost port)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
);
app.use(express.json());
// Rutas
app.use('/api/countries', countryRoutes);
// Ruta de inicio
app.get('/', (req, res) => {
  res.send('API de Países funcionando correctamente con PostgreSQL');
});
// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

