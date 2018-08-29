const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
const passport = require('passport');
const session = require('express-session');

var express = require('express');
var mysql = require('mysql');
var app = express();
var user=null;
var select = require('./db_select');
var connect = require('./db_connection');
var loginUser = require('./modules/loginUser');
//var DB = require('./modules/database');
//var Database = new DB();
//Database.saveSingleData(["diego","uribe","diesgo@utribe","calle","diegi"]);
//Database.getSingleData(["diego"],function(res){
// Database.getArrayData(1,function(res){
//    console.log(res);
// });



// //Conect Database
//     var db = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: "blogdb"
//     });
//     db.connect();


// verbs http =>get,post,put,patch,options,header,delete

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'jade');

app.use(bodyparser.json());//lee formularios enviados en tipo json
app.use(bodyparser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));// sirve archivos estaticos


app.get('/',function(req, res, next) { 
    res.locals.custom   = "hoa";
    next(); 
  }, select.getTopics);
app.get('/about',(req,res)=>{res.render('about');});
app.get('/login',(req,res)=>{res.render('login');});
app.get('/contact',(req,res)=>{res.render('contact');});
app.get('/register',(req,res)=>{res.render('register');});
app.get('/create',(req,res)=>{res.render('create');});
app.get('/n1',(req,res)=>{res.render('news1');});
app.get('/n2',(req,res)=>{res.render('news2');});
app.get('/n3',(req,res)=>{res.render('news3');});
app.get('/n4',(req,res)=>{res.render('news4');});
// app.get('/:nombre',(req,res)=>{res.render('about',{req.params.nombre});});

// // Express Session Middleware
// app.use(session({
//   secret: 'keyboard cat',
//   resave: true,
//   saveUninitialized: true
// }));

// // Passport Config
// require('./config/passport')(passport);
// // Passport Middleware
// app.use(passport.initialize());
// app.use(passport.session());

// app.get('*', function(req, res, next){
//   res.locals.user = req.user || null;
//   next();
// });


// app.get('/',function(req, res, next) { 
//     res.locals.custom   = true;
//     next(); 
//   }, select.getTopics);


//SELECTS
// app.get('/users',
// function(req, res, next){ 
// res.locals.custom   = "SELECT idusers FROM blogdb.users where (blogdb.users.user_password='"+req.body.user+"') and (blogdb.users.user_pseudo='"+req.body.password+"')" ;  next();   }
// , select.loginUser);

app.post('/users',
    function(req, res, next) { 
    res.locals.custom   = "SELECT idusers FROM blogdb.users where (blogdb.users.user_password='"+req.body.user+"') and (blogdb.users.user_pseudo='"+req.body.password+"')";
    next(); },
     loginUser.loginUser);



//INGRESOS
app.post('/new_post',(req,res)=>{    
    var datetime = new Date();
    var day=datetime.getDate();
    var m=datetime.getMonth();
    var y=datetime.getFullYear();

    if(day<10){
        day='0'+day
    }
    if(m<10){
        m='0'+m
    }
    datetime = y + '-' + m + '-' +day;


    var sql="INSERT INTO `blogdb`.`post` (`post_title`, `post_info`, `users_idusers`, `post_date`) VALUES ('"+req.body.titulo+"', '"+req.body.contenido+"', '1', '"+datetime+"');"
    console.log("Estado de la coneccion: " + connect.dbconection(sql));
    res.redirect('/');
    
});

app.post('/new_user',(req,res)=>{    
    var sql="INSERT INTO users (user_name, user_lastname, user_mail, user_password, user_pseudo) VALUES ('"+req.body.name+"', '"+req.body.lastname+"', '"+req.body.email+"', '"+req.body.password+"', '"+req.body.user+"')"
    console.log("Estado de la coneccion: " + connect.dbconection(sql));
    res.render('login');
});

app.post('/new_coment',(req,res)=>{    
    var sql="INSERT INTO `blogdb`.`comment` (`comment_info`, `post_idpost`, `post_users_idusers`) VALUES ('"+req.body.message+"', '2', '1')";
    console.log("Estado de la coneccion: " + connect.dbconection(sql));
    ;
});

// app.post('/contact/send',(req,res)=>{
//     var transporter = nodemailer.createTransport({
//         service:'gmail',
//         auth:{
//             user:'villajohnny@gmail.com',
//             pass:'5h0n150ftw4r3'
//         }
//     });
    
//     var mailOptions = {
        
//         from:'<name> <your mail id>',
//         to:'<Sender mail>',
//         subject:'example',
//         text:'name : '+req.body.name+'Email: '+req.body.email+'message :'+req.body.message,
//         html:'name : '+req.body.name +'Email: '+req.body.email+ 'message :'+req.body.message,
//     };
//     transporter.sendMail(mailOptions,(error,info)=>{
//         if(error){
//             console.log(error);
//             res.redirect('/');
//         } else{
//             console.log('message sent: '+info.response);
//             res.redirect('/');
//         }
//     });
    
// });

app.listen(3000);
console.log('server is up at port 3000');