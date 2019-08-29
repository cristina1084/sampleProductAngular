var express = require('express');
var body = require('body-parser');
var app = express();
var mongo = require('mongoose');
var url = "mongodb://localhost/sdb"

mongo.connect(url,{useNewUrlParser:true}, (err)=>{
  if(err) throw err;
  else console.log("Database connected");
})

var product = require('./model/products');


app.use(body.urlencoded({ extended: false }));
app.use(body.json());

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

/* app.get("/data", (req,res)=>{
  //res.send({msg:"Data from server"})
  res.send([
    {name:"Arun", sal:80000},
    {name:"Ram", sal:90000}
  ])
}) */

app.get("/getdata",(req,res)=>{
  product.find({},(err,result)=>{
    if (err) throw err;
    else res.send(result);
  })
})

app.post("/postdata", (req,res)=>{
  console.log(req.body)
  var p1 = new product(req.body);
  p1.save((err)=>{
    if (err) throw err;
    else res.send({msg:"Data Added"})
  })
})

app.get("/getdata/:pid",(req,res)=>{
  product.find({productId:req.params.pid},(err,result)=>{
    if (err) throw err;
    else res.send(result);
  })
})

app.get("/deletedata/:pid",(req,res)=>{
  product.deleteOne({productId:req.params.pid},(err,result)=>{
    if (err) throw err;
    else  res.send({msg:"Data Deleted"})
  })
})

app.post("/editdata",(req,res)=>{
  product.updateOne(
    {productId:req.body.productId},
    {$set:{
      productName: req.body.productName,
      productPrice: req.body.productPrice
    }},
    (err,result)=>{
      if (err) throw err;
      else res.send({msg:"Data updated"})
    }
  )
})

app.listen(8080,()=>{
  console.log("Listening");
})
