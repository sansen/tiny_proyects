const express = require('express');
const cors = require('cors');

const app = express();
var db = require("./database.js")

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    var sql = "SELECT * FROM feriados WHERE fecha >= date('now') ORDER BY fecha limit ?";
    var params = [];

    var limit = 1 
    if (typeof req.query.limit !== 'undefined')
	limit = req.query.limit

    params.push(limit)

    db.all(sql, params, (err, row) => {
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


app.get('/proximasfechas', (req, res) => {
    var sql = "SELECT * FROM feriados WHERE fecha > date('now') ORDER BY fecha limit 99"
    var params = [];

    db.all(sql, params, (err, row) => {
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


app.get('/proximasfechas/:id', (req, res) => {
    var sql = "SELECT * FROM feriados WHERE id=?"
    var params = [req.params.id];

    db.all(sql, params, (err, row) => {
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


app.post('/proximasfechas/create', (req, res) => {
    var insert = 'INSERT OR REPLACE INTO feriados (fecha, descripcion) VALUES (?,?) ';
    db.run(insert, [req.body.fecha, req.body.descripcion]);

    res.send({
     	"fecha": req.body.fecha,
     	"descripcion": req.body.descripcion
    });
});


app.get('/delete/:id', (req, res) => {
    var deleteQuery = 'DELETE FROM feriados where id = ?';
    db.run(deleteQuery, [req.params.id]);

    res.send({
	res: 'ok'
    });
});


app.patch('/edit/:id', (req, res) => {
    var editQuery = 'UPDATE feriados SET fecha = ?, descripcion = ? WHERE id = ?';
    db.run(editQuery, [req.body.fecha, req.body.descripcion, req.params.id]);

    res.send({
	res: 'ok'
    });
});


app.listen(5000, () => console.log('Example app is listening on port 5000.'));

