var express = require("express")
var app = express()
var cors = require('cors')
var db = require("./database.js")

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
    var sql = "select * from flowers"
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


// Root path
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});
