
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('HOME. para hacer un POST, utilice la direccion http://localhost:3000/api');
    })

    app.get('*', (req, res) => {
        res.send('URL no encontrada. para hacer un POST, utilice la direccion http://localhost:3000/api');
    })
}