// Crear funciones CRUD
const models = require('../models/product.models'); // Requerir el esquema
const ctrl = {} // Crear un objeto para almacenar las funciones
// Mostrar los productos
ctrl.shows = async (req, res) => {
    const x = await models.find().lean();
    res.render('products/list_product', {x});
}
// Mostrar un producto
ctrl.show = async (req, res) => {
    // Filtrar por id
    const x = await models.findById(req.params.id);
    res.json(x)
}
// Crear un producto
ctrl.create = async (req, res) => {
    // Recibir el producto
    const x = new models(req.body);
    // Guardar el producto
    await x.save();
    // Renderizar al formulario
    res.render('products/new_product');
}
// Actualizar un producto
ctrl.update = async (req, res) => {
    // Filtrar por el id y actualizarlo
    await models.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/products');
}
// Eliminar un producto
ctrl.delete = async (req, res) => {
    // Filtrar por el id y eliminarlo
    await models.findByIdAndDelete(req.params.id);
    res.redirect('/products'); // Poner '/' al principio porque los esta redirecionando
}
// Renderizar paginas a las plantillas
ctrl.renderNew = (req, res) => {
    res.render('products/new_product');
}

ctrl.renderUpd = async (req, res) => {
    const x = await models.findById(req.params.id).lean();
    res.render('products/upd_product', {x});
}

// Exportar el modulo
module.exports = ctrl;