var express=require('express');
//var path=require('path');
var app=express();
var mysql=require('mysql');
const cors= require('cors');
// var ejs=require('ejs');
// app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'views'));
var bodyParser=require('body-parser');

var conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"studentdb"
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/',function(req,res){
    res.send("Hello from Server");
});

 app.post('/FormData',function(req,res){
      //var sid=req.body.Identity;
      var sName=req.body.Name;
      var scity=req.body.city;
      var sstate=req.body.state;
      var scountry=req.body.country;
      var spasswrd=req.body.passd;

      conn.connect(function(err){
        var sql="insert into student(stud_name,stud_city,stud_state,stud_country,stud_password) values('"+sName+"','"+scity+"','"+sstate+"','"+scountry+"','"+spasswrd+"')";
        conn.query(sql,function(err,FormData){
            if(err) throw err;
            //res.redirect('menu');
        });
    });
     res.status(200).send({"message":"Data received"});
    
 });

 app.get('/retrive',function(req,res){
    let sql = `SELECT * FROM student`;
    conn.query(sql, (error, results,fields) => {
      if (error) {
        return console.error(error.message);
      }
      res.json(results);
    });
 });

 app.get('/update/:id',(req, res)=>{  
  let ids = req.params.id;
  let edit = "SELECT * FROM student where stud_id='"+ids+"'";
  conn.query(edit, (error, results,fields) => {
    if (error) {
      return console.error(error.message);
    }
    res.json(results);
  });
 })

 app.post('/update/:id',function(req,res){
  let sid=req.params.id;
  let sName=req.body.Name;
  let scity=req.body.city;
  let sstate=req.body.state;
  let scountry=req.body.country;
  let spasswrd=req.body.passd;

  conn.connect(function(err){
      var sql="update student set stud_name='"+sName+"',stud_city='"+scity+"',stud_state='"+sstate+"',stud_country='"+scountry+"',stud_password='"+spasswrd+"' where stud_id='"+sid+"'";
      conn.query(sql,function(err,register){
          if(err) throw err;
          console.log("Record Updated"); 
          res.redirect('FormData');
      });
  });
});

 app.delete('/deleteStud/:id', (req, res, next)=>{  
   console.log(req.params.id); 
   let ids = req.params.id;
   conn.connect(function(err){
    var sql="delete from student where stud_id='"+ids+"'";
    conn.query(sql,function(err,FormData){
        if(err) throw err;
        console.log("Record Deleted");
        //res.redirect('retrive');
    });
});

   res.send( 
    {"message":"Data stud row deleted"});  
});  

app.listen(3000);
console.log("Server Started");