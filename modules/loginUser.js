module.exports = {
	
	loginUser: (req, res, next)=>{	
		var mysql = require('mysql');
		var db = mysql.createConnection({
			  host: "localhost",
			  user: "root",
			  password: "",
			  database: "blogdb"
			});
		 
				db.connect();
				console.log(res.locals.custom);
				db.query(res.locals.custom, (err, result, fields)=>{
					if(result==NULL){
						alert("usuario no existente");
					}else{
						db.query("SELECT * FROM post ORDER BY idpost Desc;", (err, result, fields)=>{
							if(err) throw err;
							db.end();
							return res.render('index', {entradas:result});
						});
					}
					db.end();
				});
				
				return 
	}
}