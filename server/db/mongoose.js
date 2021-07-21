const mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb://localhost/duke");
mongoose.connection.once('open', function (){
    console.log("Connection is successfull duke");
}).on('error', function(error){
    console.log(error);

});

module.exports = {mongoose};
