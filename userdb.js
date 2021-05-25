var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "users.db"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if(err) {
        console.error(err.message)
        throw err
    }else {
        console.log('Connected to the SQLite database')
        db.run(`CREATE TABLE users (
            id INTEGER PRIMARY KEY,
            email TEXT NOT NULL,
            result TEXT NOT NULL,
            level INTEGER NOT NULL
            
            )`, (err) => {
            if (err) {
                //table already created
                console.log('table already created')
            } else {
                //table just created, creating some rows
                var insert = 'INSERT INTO users (email, result, level) VALUES (?,?,?)'

                db.run(insert, ['Andreas@iths.se', 7, 1])






            }
        })
    }
})

module.exports = db