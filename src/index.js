// Iniciar el servidor
require('./database'); // Base de datos
require('dotenv').config(); // Variables de entorno

const app = require('./server');

app.listen(process.env.PORT, () => {
    console.log(`server on port:`, process.env.PORT);
})