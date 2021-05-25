var express = require("express")
var app = express()
var cors = require('cors')
var db = require("./database.js")
var usersdb = require("./userdb.js")

app.use(cors())
app.use(express.static('public'))

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var HTTP_PORT = 3000

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port",HTTP_PORT)
});
app.get("/api/flower", (req, res, next) => {
    var sql = "select * from flowers ORDER BY level, questionNumber"
    var params = []
    db.all(sql, params, (err, rows) => {

        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "flower":rows
        })
    });
});

app.get("/api/users", (req, res, next) => {
    var sql = "select * from users"
    var params = []
    usersdb.all(sql, params, (err, rows) => {

        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "user":rows
        })
    });
});

app.get("/api/user/:epost", (req, res, next) => {
    var sql = "select * from users where email=?"
    var params = [req.params.epost]
    usersdb.all(sql, params, (err, rows) => {

        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "user":rows
        })
    });
});



app.post("/api/users/:email", (req, res, next) => {


    usersdb.run(`INSERT INTO users(email, result, level) VALUES (?,?,?)`, [req.params.email, 0, 1], function (err) {
        if (err) {
            return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with row id ${this.lastID}`);
        res.json({"message": "Ok"})
    });
});

    app.patch("/api/users/:email/:level/:result", (req, res, next) => {

        var user_name = req.params.email;
        usersdb.run(`UPDATE users SET level = ?, result = ? WHERE email=?`,[req.params.level,req.params.result,req.params.email], function(err) {


            if (err) {
                return console.log(err.message);
            }
            // get the last insert id
            console.log(`A row has been inserted with row id ${this.lastID}`);
            res.json({"message":"Ok"})
        });

    });



// Root path
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

