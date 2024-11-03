var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE feriados (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fecha text, 
            descripcion text, 
            CONSTRAINT fecha_unique UNIQUE (fecha)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO feriados (fecha, descripcion) VALUES (?,?)'
                db.run(insert, ['2024-10-12',"dia de la raza"])
                db.run(insert, ['2024-11-18',"feriados !!"])
            }
        });  
    }
});

module.exports = db
