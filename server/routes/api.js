const API_BASE = "/api";
const axios = require('axios')
const { validate, ValidationError, Joi } = require('express-validation')
 
const loginValidation = { //realiza la validacion
  body: Joi.object({
    apellido: Joi.string()
      .required(),
    nombre: Joi.string(),
    dni: Joi.number()
      .max(9999999999) //maximo 10 digitos
      .required(),
  }),
}

module.exports = function(app){
    app.get(`${API_BASE}/`, (req, res) => {
        axios.get('https://apitest-4a395-default-rtdb.firebaseio.com/personas.json', {
          params: {}
        }).then((result) => {
          res.send( JSON.stringify(result.data) );
        })
    })

    // ruta del metodo POST
    app.post(`${API_BASE}/`, validate(loginValidation, {}, {}), function (req, res) {
        //var nombre = req.body.nombre;
        //var apellido = req.body.apellido;
        //var dni = req.body.dni;
        //res.send(`POST request sent to the api: ${var1}`);

        //axios.post('https://reclutamiento-14cf7.firebaseio.com/personas.json', req.body)
        axios.post('https://apitest-4a395-default-rtdb.firebaseio.com/personas.json', req.body)
        .then((res) => {
          //console.log(`statusCode: ${res.statusCode}`)
          console.log("status code: " + res.status + " - " + res.statusText);
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        })

        res.send('{"response":"valid"}');   
    });
}