const express = require('express');
const cors = require('cors');

const app = express();
var db = require("./database.js")
app.use(cors());

app.get('/', (req, res) => {
    var sql = "SELECT * FROM feriados WHERE fecha >= date('now') ORDER BY fecha limit 1";//WHERE fecha > date('now')" // ORDER BY id DESC limit 1";
    var params = [];
    db.get(sql, params, (err, row) => {
	console.log(row)
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "data":row
        })
    });
});

app.listen(5000, () => console.log('Example app is listening on port 5000.'));


function getNextFeriado(db) {
    var sql = "SELECT * FROM feriados WHERE fecha > NOW() ORDER BY id DESC limit 1 "
    var params = []
    return db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        return {
            "message":"success",
            "data":row
        }
    });
}

