// Estructura de la coleccion
const {Schema, model} = require('mongoose');
// Crear esquema de la coleccion
const productSchema = new Schema({
    // Denifir campos de la coleccion
    name: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true}
}, {
    // Activar los campos de hora de creacion y actualizacion
    timestamps: true,
    // Desactivar el campo v_
    versionKey: false
})
// Exportar el modelo | Asignar nombre de la coleccion y definir su esquema
module.exports = model('products', productSchema);