const express = require('express');
const bodyParser = require("body-parser")

const { PORT } = require("./config");
var cors = require('cors');
const app = express();

app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routes/api")(app);
require("./routes/views")(app);

app.listen(PORT, () => {
  console.log(`Servidor iniciado, http://localhost:${PORT}`);
})