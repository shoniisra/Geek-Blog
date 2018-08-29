// dependencies
var DB = require('./modules/database');
var Database = new DB();

//Database.saveSingleData(["diego","uribe","diesgo@utribe","calle","diegi"]);

Database.getSingleData(["diego"],function(res){
   console.log(res.user_name);
});