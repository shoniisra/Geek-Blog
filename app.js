const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
var express = require('express');
var mysql = require('mysql');
var connect = require('./db_connection');
var consult = require('./db_consult');
var app = express();

// verbs http =>get,post,put,patch,options,header,delete

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'jade');

app.use(bodyparser.json());//lee formularios enviados en tipo json
app.use(bodyparser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));// sirve archivos estaticos



app.get('/',(req,res)=>{
    
    res.render('index',);
});
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

app.post('/users',(req,res)=>{    

    var user = req.body.user;
    var password = req.body.password;    
    var sql="SELECT idusers FROM blogdb.users where (blogdb.users.user_password='"+user+"') and (blogdb.users.user_pseudo='"+password+"')" ;
    console.log("Estado de la coneccion: " + connect.dbconection(sql));
    res.render('index');
});

app.post('/new_post',(req,res)=>{    

    var titulo = req.body.titulo;
    var contenido = req.body.contenido;
    var datetime = new Date();
    console.log(datetime);

    var sql="INSERT INTO `blogdb`.`post` (`post_title`, `post_info`, `users_idusers`, `post_date`) VALUES ('"+titulo+"', '"+contenido+"', '1', '"+datetime+"');"
    console.log("Estado de la coneccion: " + connect.dbconection(sql));
    console.log("Post Guardado Exitosamente ");    
    res.render('index');
});

app.post('/new_user',(req,res)=>{    

    var name = req.body.name;
    var lastname = req.body.lastname;
    var user = req.body.user;
    var email = req.body.email;
    var password = req.body.password;

    var sql="INSERT INTO users (user_name, user_lastname, user_mail, user_password, user_pseudo) VALUES ('"+name+"', '"+lastname+"', '"+email+"', '"+password+"', '"+user+"')"
    console.log("Estado de la coneccion: " + connect.dbconection(sql));
    res.render('login');
});

app.post('/new_coment',(req,res)=>{    

    var message = req.body.message;

       var sql="INSERT INTO `blogdb`.`comment` (`comment_info`, `post_idpost`, `post_users_idusers`) VALUES ('"+message+"', '2', '1')";
    console.log("Estado de la coneccion: " + connect.dbconection(sql));
    console.log("Post Guardado Exitosamente ");    
    res.render('index');
});
app.post('/contact/send',(req,res)=>{
    var transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'villajohnny@gmail.com',
            pass:'5h0n150ftw4r3'
        }
    });
    
    var mailOptions = {
        
        from:'<name> <your mail id>',
        to:'<Sender mail>',
        subject:'example',
        text:'name : '+req.body.name+'Email: '+req.body.email+'message :'+req.body.message,
        html:'name : '+req.body.name +'Email: '+req.body.email+ 'message :'+req.body.message,
    };
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.redirect('/');
        } else{
            console.log('message sent: '+info.response);
            res.redirect('/');
        }
    });
    
});

app.listen(3000);
console.log('server is up at port 3000');