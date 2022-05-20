//-----------------------> Require Process
const express = require("express");
const { resolveInclude } = require("ejs");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//MySQL
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'nodejs_pet'
});

// ------------------------> Get 
app.get('', (req, res) => {
    pool.getConnection((err, connection) => {
        connection.query('SELECT * FROM customer', (err, rows) => {
            // res.json(rows);
            res.render("index", {Info : rows})
        })
    })
})

app.get("/", function(req, res){
    res.render("index");
});

app.get("/login", function (req, res) { 
    res.render("login");
})

app.get("/booking", function(req, res){
    res.render("booking")
})


//--------------------------> Post
app.post("/", function(req, res){
    res.render("index");
});

app.post("/success", function(req, res){
    var userbooking = req.body.userbooking;
    console.log(userbooking);
    pool.getConnection((err, connection)=>{
        connection.query('INSERT ')
    })
})

app.listen(3000 || process.env.PORT, function(){
    console.log("server is running on port 3000");
});