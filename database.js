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

                db.run(insert, ['Tussilago', 'En vårblomma. Kallas även Hästhov Blommar vanligen mellan april-maj, ibland så tidigt som i februari. Vanligast i södra och mellersta Sverige. Växer på fuktig, grusig eller lerig mark. En viktig växt för våra bin.', 'tussilago.png', 1, 1])
                db.run(insert, ['Blåsippa', 'Blåsippan är en fridlyst blomma vilket innebär att det är förbjudet att gräva eller plocka blomman samt använda den till försäljning. Blommar mellan april-maj. Vanligast i södra Sverige. Blomman växer mest i lövskogar. Är en ört och kan bli hundraårig.', 'blasippa.jpg', 1, 2])
                db.run(insert, ['Vitsippa', 'Vitsippan är en ört som blommar mellan april-maj. De vita blommorna kan skifta i rött när de är nyutslagna samt går mot sitt slut. Vitsippan finns i nästan hela landet och växer i skogs- och hagmarker.', 'vitsippa.jpg', 1, 3])
                db.run(insert, ['Krokus', 'Vårkrokus är en lökväxt och tillhör familjen irisväxter. Ursprung i Sydeuropa och Sydosteuropa. Krokusen blommar mellan mars-april, ibland ännu tidigare. Den blommar i lila, gula och vita nyanser.', 'krokus.jpg', 1, 4])
                db.run(insert, ['Påsklilja', 'Påskliljan är en flerårig lökväxt som tillhör familjen Amaryllisväxter. Blomman har en gul tub- eller trumpetliknande bikrona. Blommar april-maj.', 'pasklilja.jpg', 1, 5])
                db.run(insert, ['Snödroppe', 'Snödroppen tillhör familjen Amaryllis och är en av de mest kända inom släktet. Blommar mellan februari-april och finns i hela Sverige. Snödroppen har vita kronblad och är en lökväxt. Löken och växten är giftig.', 'snodroppe.jpg', 1, 6])
                db.run(insert, ['Blåstjärna', 'Den ryska blåstjärnan tillhör familjen Sparrisväxter. Den blommar mellan april-maj och har blå violetta kronblad.\n', 'blastjarna.jpg', 1, 7])
                db.run(insert, ['Tulpan', 'Tulpanen tillhör familjen liljeväxter. Tulpanerna en är en lökväxt med breda blad och kommer i olika färger. Tulpanernas dag infaller den 15 januari. ', 'tulpan.jpg', 1, 8])
                db.run(insert, ['Hyacint', '', 'hyacint.jpg', 1, 9])
                db.run(insert, ['Präskrage', '', 'prastkrage.jpg', 1, 10])
                db.run(insert, ['Gullviva', 'Gullviva förekommer i Syd- och Mellansverige, blommorna användes förr till att färga brännvin och snus och man har också gjort vin, så kallat oxläggevin, på blommorna', 'gullviva.jpg', 2, 1])
                db.run(insert, ['Förgätmigej', 'Förgätmigej blommar från juni till augusti med ganska stora ljusblå eller vita blommor som sitter i ensidiga knippen. Arterna i släktet förgätmigejer (Myosotis) är alla ganska lika.\n', 'forgatmigej.jpg', 2, 2])
                db.run(insert, ['Midsommarblomster', 'Midsommarblomster blommar vanligen i juni-juli. Blommorna är ganska stora och sitter två och två i stora knippen, de är oftast violetta men i norra Sverige är vitblommiga exemplar inte ovanliga. ', 'midsommarblomster.jpg', 2, 3])
                db.run(insert, ['Johannesört', '', 'johannesort.jpg', 2, 4])
                db.run(insert, ['Fingerborgsblomma', '', 'fingerborgsblomma.jpg', 2, 5])
                db.run(insert, ['Blåeld', '', 'blaeld.jpg', 2, 6])
                db.run(insert, ['Smörblomma', '', 'smorblomma.jpg', 2, 7])
                db.run(insert, ['Vallmo', '', 'vallmo.jpg', 2, 8])
                db.run(insert, ['Blåklocka', 'Blåklocka är en ganska späd, flerårig ört, den växer ofta i glesa tuvor med veka uppstigande stjälkar och blir bara ett par decimeter hög. Blåklocka och/eller ängsklocka är Dalarnas landskapsblomma.\n', 'blaklocka.jpg', 2, 9])
                db.run(insert, ['Rödklöver', 'Rödklöver blommar hela sommaren och fortsätter att blomma till långt in på hösten. Rödklöver är vanlig i hela landet och den odlas också ofta som vallväxt. Den växer vanligen på kulturpåverkad mark.', 'rodklover.jpg', 2, 10])







            }
        })
    }
})

module.exports = db