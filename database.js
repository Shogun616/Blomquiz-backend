var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "flowers.db"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if(err) {
        console.error(err.message)
        throw err
    }else {
        console.log('Connected to the SQLite database')
        db.run(`CREATE TABLE flowers (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            info TEXT NOT NULL,
            url TEXT NOT NULL UNIQUE,
            level INTEGER NOT NULL,
            questionNumber INTEGER NOT NULL 
            )`, (err) => {
            if (err) {
                //table already created
                console.log('table already created')
            } else {
                //table just created, creating some rows
                var insert = 'INSERT INTO flowers (name, info, url, level, questionNumber) VALUES (?,?,?,?,?)'

                db.run(insert, ['Tussilago', '', 'Tussilago.png', 1, 1])
                db.run(insert, ['Blåsippa', '', 'Blasippa.jpg', 1, 2])
                db.run(insert, ['Vitsippa', '', 'vitsippa.jpg', 1, 3])
                db.run(insert, ['Krokus', '', 'krokus.jpg', 1, 4])
                db.run(insert, ['Påsklilja', '', 'pasklilja.jpg', 1, 5])
                db.run(insert, ['Snödroppe', '', 'snadroppe.jpg', 1, 6])
                db.run(insert, ['Blåstjärna', '', 'blasjarna.jpg', 1, 7])
                db.run(insert, ['Tulpan', '', 'tulpan.jpg', 1, 8])
                db.run(insert, ['Hyacint', '', 'hyacint.jpg', 1, 9])
                db.run(insert, ['Präskrage', '', 'prastkrage.jpg', 1, 10])
                db.run(insert, ['Gullviva', '', 'gullviva.jpg', 2, 1])







            }
        })
    }
})

module.exports = db

