var mysql = require('mysql');
		var db = mysql.createConnection({
			  host: "localhost",
			  user: "root",
			  password: "",
			  database: "blogdb"
			});

module.exports = {
	
	getTopics: (req, res, next)=>{	
		
		 
				db.connect();
				console.log("hola");
				db.query("SELECT * FROM post ORDER BY idpost Desc;", (err, result, fields)=>{
					if(err) throw err;

					return res.render('index', {entradas:result});
				});
				return 
	}
}
	// getUSer: function(req, res, next){	
	// 	// var blogs;
	// 	var mysql = require('mysql');
	// 	var db = mysql.createConnection({
	// 		  host: "localhost",
	// 		  user: "root",
	// 		  password: "",
	// 		  database: "blogdb"
	// 		});
	// 			db.connect();
	// 			db.query("SELECT idusers FROM blogdb.users Where user_name='asd';", function (err, result, fields) {
	// 				if(err) throw err;
	// 				// console.log(result);
	// 				db.end();
	// 				return res.render('index', {entradas:result});
	// 			});
	// 			return 
	// }
