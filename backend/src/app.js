const express = require("express");
const app = express();
const cors = require("cors");

//configuracion del server
app.set('port', process.env.PORT || 4000);


//Middleware
app.use(express.json());
app.use(cors());


//Rutas
app.get('/', function (req, res) {
    res.send('GET request to the ss');
});

app.use("/api/user", require("./Routes/user.route"));


module.exports = app;