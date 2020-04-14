const mongoose = require("mongoose");


//conectar a la bd
const URI = 'mongodb://localhost/tattooDB' ;

mongoose.connect(URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("Corriendo la DB");
})

module.exports = connection;