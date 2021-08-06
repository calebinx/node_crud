// Servidor
const express = require('express');
const morgan = require('morgan');
const path = require('path'); // Unir directorios con path.join
const exphbs = require('express-handlebars');
const method = require('method-override');
// Inicializaciones
const app = express();
// Configuraciones
app.set('views', path.join(__dirname, 'views')); // Establecer las vistas
app.engine('.hbs', exphbs({
    defaultLayout: 'main', // Plantilla principal
    layoutsDir: path.join(app.get('views'), 'layouts'), // Plantillas de diseños
    partialsDir: path.join(app.get('views'), 'partials'), // Pedazos de codigos reutilizables
    extname: '.hbs' // Nombre de la extencion
})); // Motor de plantillas
app.set('view engine', '.hbs'); // Establecer el motor de plantillas
// Servicios y funciones | Middleware
app.use(morgan('dev')); // Ver las peticiones
app.use(express.json()); // Soportar datos json internos | Backend
app.use(express.urlencoded({extended: false})); // Soportar datos json externos | Frontend
app.use(method('_method')); // Enviar metodos put y delete
// Rutas
app.use('/products', require('./routers/product.routes')); // Definir el enrutador del producto
app.get('/', (req, res) => {
    res.render('index');
})
// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public'))); // Carpeta publica para el navegador
// Exportar el modulo
module.exports = app;