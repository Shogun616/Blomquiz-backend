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

                db.run(insert, ['Tussilago', '', 'tussilago.png', 1, 1])
                db.run(insert, ['Blåsippa', '', 'blasippa.jpg', 1, 2])
                db.run(insert, ['Vitsippa', '', 'vitsippa.jpg', 1, 3])
                db.run(insert, ['Krokus', '', 'krokus.jpg', 1, 4])
                db.run(insert, ['Påsklilja', '', 'pasklilja.jpg', 1, 5])
                db.run(insert, ['Snödroppe', '', 'snodroppe.jpg', 1, 6])
                db.run(insert, ['Blåstjärna', '', 'blastjarna.jpg', 1, 7])
                db.run(insert, ['Tulpan', '', 'tulpan.jpg', 1, 8])
                db.run(insert, ['Hyacint', '', 'hyacint.jpg', 1, 9])
                db.run(insert, ['Präskrage', '', 'prastkrage.jpg', 1, 10])
                db.run(insert, ['Gullviva', '', 'gullviva.jpg', 2, 1])
                db.run(insert, ['Förgätmigej', '', 'forgatmigej.jpg', 2, 2])
                db.run(insert, ['Midsommarblomster', '', 'midsommarblomster.jpg', 2, 3])
                db.run(insert, ['Johannesört', '', 'johannesort.jpg', 2, 4])
                db.run(insert, ['Fingerborgsblomma', '', 'fingerborgsblomma.jpg', 2, 5])
                db.run(insert, ['Blåeld', '', 'blaeld.jpg', 2, 6])
                db.run(insert, ['Smörblomma', '', 'smorblomma.jpg', 2, 7])
                db.run(insert, ['Vallmo', '', 'vallmo.jpg', 2, 8])
                db.run(insert, ['Blåklocka', '', 'blaklocka.jpg', 2, 9])
                db.run(insert, ['Rödklöver', '', 'rodklover.jpg', 2, 10])







            }
        })
    }
})

module.exports = db

