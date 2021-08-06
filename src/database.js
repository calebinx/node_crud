// Conectar a la base de datos
const {connect} = require('mongoose');

connect('mongodb://localhost/store', {
    // Corregir advertencias de obsolencia
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
// Verificar conexion
.then(db => console.log('db connected'))
.catch(e => console.error(e));