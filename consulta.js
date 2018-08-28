// dependencies
var DB = require('./modules/database');
var Database = new DB();

Database.saveSingleData(["diego","uribe","diego@uribe","calle","diegi"]);

Database.getSingleData(1,function(res){
   console.log(res.nombre);
});