// Crear rutas del servidor
const ctrl = require('../controllers/product.controllers'); // Requerir las funciones CRUD
const {Router} = require('express');
const router = Router();
// Rutas CRUD
router.get('/', ctrl.shows); // Mostrar
router.post('/', ctrl.create); // Crear

router.get('/new', ctrl.renderNew); // Formulario Crear

router.get('/:id', ctrl.show); // Mostrar dato unico

router.get('/update/:id', ctrl.renderUpd); // Formulario Actualizar
router.put('/update/:id', ctrl.update); // Actualizar

router.delete('/delete/:id', ctrl.delete); // Eliminar
// Exportar el modulo
module.exports = router;