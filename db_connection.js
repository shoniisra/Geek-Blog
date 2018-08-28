exports.dbconection=(sql)=>{
	
    var mysql = require('mysql');
        
	var con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "",
	  database: "blogdb"
	});
	var consulta=(err, result)=>{
		  	if (err) throw err;	 
		  	 console.log(result.insertId)		  	 
	}
	con.connect((err)=>{
	  if (err) throw err;
		  console.log("Connected!"); 
		  con.query(sql,consulta);		  
	});
};