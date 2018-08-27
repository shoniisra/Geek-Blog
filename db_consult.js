var mysql = require('mysql');
var idUser=0

exports.loginUser = (con,sql)=>{
	con.connect((err)=>{ 
 	if (err) throw err;
	  console.log("Connected!");
	  var sql = "INSERT INTO users (user_name, user_lastname, user_mail, user_password, user_pseudo) VALUES ('Paul2', 'Salazar2', 'psalazar@devsu.com2', 'qwerty', 'paul')";
	  con.query(sql,(err, result)=>{
	    if (err) throw err;
	    idUser=result.insertId
	    console.log("Result ingresaso: " + idUser);

	  });
	});
}



exports.newPost = (con,sql)=>{
	con.connect((err)=>{ 
 	if (err) throw err;
	  var sql = "SELECT name, address FROM customers";
	  con.query(sql,(err, result)=>{
	    if (err) throw err;
	    idUser=result.insertId
	    console.log("Result ingresaso: " + idUser);

	  });
	});
}


