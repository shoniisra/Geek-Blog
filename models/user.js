
var mysql = require('mysql');
    var db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "blogdb"
      });
        db.connect();
// User Schema
const UserSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);