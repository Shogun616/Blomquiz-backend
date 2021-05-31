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
            url TEXT NOT NULL,
            level INTEGER NOT NULL,
            questionNumber INTEGER NOT NULL, 
            infoQuestion TEXT,
            answerA TEXT,
            answerB TEXT,
            answerC TEXT
            )`, (err) => {
            if (err) {
                //table already created
                console.log('table already created')
            } else {
                //table just created, creating some rows
                var insert = 'INSERT INTO flowers (name, info, url, level, questionNumber, infoQuestion, answerA, answerB, answerC) VALUES (?,?,?,?,?,?,?,?,?)'

                db.run(insert, ['Tussilago', 'Tussilago är en vårblomma. Kallas även Hästhov Blommar vanligen mellan april-maj, ibland så tidigt som i februari. Vanligast i södra och mellersta Sverige. Växer på fuktig, grusig eller lerig mark. En viktig växt för våra bin.', 'tussilago.png', 1, 1, 'Vad kallas tussilago även för?', 'Hästhov', 'Maskros', 'Smörblomma'])
                db.run(insert, ['Blåsippa', 'Blåsippan är en fridlyst blomma vilket innebär att det är förbjudet att gräva eller plocka blomman samt använda den till försäljning. Blommar mellan april-maj. Vanligast i södra Sverige. Blomman växer mest i lövskogar. Är en ört och kan bli hundraårig.', 'blasippa.jpg', 1, 2, ' Varför är det förbjudet att sälja blåsippan?','Fridlyst', 'Giftig','Explosivt'])
                db.run(insert, ['Vitsippa', 'Vitsippan är en ört som blommar mellan april-maj. De vita blommorna kan skifta i rött när de är nyutslagna samt går mot sitt slut. Vitsippan finns i nästan hela landet och växer i skogs- och hagmarker.', 'vitsippa.jpg', 1, 3, 'Vilken färg blir vitsippan när de är nyutslagen eller går mot sitt slut?', 'Röd', 'Blå', 'Rosa'])
                db.run(insert, ['Krokus', 'Vårkrokus är en lökväxt och tillhör familjen irisväxter. Ursprung i Sydeuropa och Sydosteuropa. Krokusen blommar mellan mars-april, ibland ännu tidigare. Den blommar i lila, gula och vita nyanser.', 'krokus.jpg', 1, 4,'Vilken månad blommar Krokus?','Mars - April','Juni - Juli','Augusti - September'])
                db.run(insert, ['Påsklilja', 'Påskliljan är en flerårig lökväxt som tillhör familjen Amaryllisväxter. Blomman har en gul tub- eller trumpetliknande bikrona. Blommar april-maj.', 'pasklilja.jpg', 1, 5,'Vilken familj tilhör Påskliljan Blomma?' ,'Amaryllisväxter', 'Lökväxter','Sparisväxter'])
                db.run(insert, ['Snödroppe', 'Snödroppen tillhör familjen Amaryllis och är en av de mest kända inom släktet. Blommar mellan februari-april och finns i hela Sverige. Snödroppen har vita kronblad och är en lökväxt. Löken och växten är giftig.', 'snodroppe.jpg', 1, 6,'Hur många kronblad har Snödroppen?','6','4','3'])
                db.run(insert, ['Blåstjärna', 'Den ryska blåstjärnan tillhör familjen Sparrisväxter. Den blommar mellan april-maj och har blå violetta kronblad.\n', 'blastjarna.jpg', 1, 7,'Vilken växtfamilj tillhör den ryska blåstjärnan?','Sparrisväxter','Amaryllisväxter','Liljeväxter'])
                db.run(insert, ['Tulpan', 'Tulpanen tillhör familjen liljeväxter. Tulpanerna en är en lökväxt med breda blad och kommer i olika färger. Tulpanernas dag infaller den 15 januari. ', 'tulpan.jpg', 1, 8,'Vilket datum firas tulpanernas dag?','15 januari','16 februari','15 maj'])
                db.run(insert, ['Hyacint', 'Hyacinten kom troligen till Sverige under 1600-talet. Den är mest känd för sina flockar av doftande, färgglada blommor. Blomfärgen kan vara blå, vit, ljusgul, rosa, röd eller lila. Hyacinten blommar på våren och växer bäst på soliga platser med väldränerad, men inte torr jord.', 'hyacint.jpg', 1, 9,'Vilket århundrade kom Hyacinten till Sverige?','1600-talet','1800-talet','1900-talet'])
                db.run(insert, ['Präskrage', 'Prästkrage blommar i juni-juli. Prästkrage finns i hela landet, men är mer sällsynt i fjälltrakterna. Det är en kulturmarksväxt som återfinns på öppna marker, som ängar, hagar, skogsbryn och vägkanter. Då hagar och öppna landskap blivit alltmer ovanliga har också prästkragen minskat i antal. Prästkrage är Skånes landskapsblomma.', 'prastkrage.jpg', 1, 10,'Vilket landskap har Prästkrage som landskapsblomma?','Skåne län','Upplands län','Västernorrlands län'])
                db.run(insert, ['Gullviva', 'Gullviva förekommer i Syd- och Mellansverige, blommorna användes förr till att färga brännvin och snus och man har också gjort vin, så kallat oxläggevin, på blommorna', 'gullviva.jpg', 2, 1])
                db.run(insert, ['Förgätmigej', 'Förgätmigej blommar från juni till augusti med ganska stora ljusblå eller vita blommor som sitter i ensidiga knippen. Arterna i släktet förgätmigejer (Myosotis) är alla ganska lika.\n', 'forgatmigej.jpg', 2, 2])
                db.run(insert, ['Midsommarblomster', 'Midsommarblomster blommar vanligen i juni-juli. Blommorna är ganska stora och sitter två och två i stora knippen, de är oftast violetta men i norra Sverige är vitblommiga exemplar inte ovanliga. ', 'midsommarblomster.jpg', 2, 3])
                db.run(insert, ['Johannesört', 'Johannesört är en flerårig växt med gula blommor. Den kan bli upp till 7 dm hög. Hypericum i det vetenskapliga namnet kan översättas med "överbild" då man i gamla tider trodde sig kunna fördriva onda andar från det som bilden föreställde genom att hänga några kvistar ovanför bilden.', 'johannesort.jpg', 2, 4])
                db.run(insert, ['Fingerborgsblomma', 'Fingerborgsblomma är egentligen ingen vild blomma, men den förvildar sig lätt och sprider sig utanför trädgårdar. Hela växten är mycket giftig och 2-3 blad är dödlig dos för en vuxen. Digitalis (som växten också kallas har medicinsk användning som hjärtmedicin.', 'fingerborgsblomma.jpg', 2, 5])
                db.run(insert, ['Blåeld', 'Blåelden kommer från mellersta och sydöstra Europa och är vanlig på Öland och Gotland. I Sverige är den också vanlig i Skånes kalktrakter men finns spridd ända upp till södra Norrland. Blåeld kallas ibland i äldre litteratur för "Snokört".', 'blaeld.jpg', 2, 6])
                db.run(insert, ['Smörblomma', 'Smörblomma blommar från juni till september. En färsk smörblomma har en skarp smak, och är giftig för boskap. Det är därför som en hästhage alltid har kvar smörblommorna. Även nötkreatur undviker smörblommor. Torkade smörblommor behåller färgen, och kan därför användas som eterneller.', 'smorblomma.jpg', 2, 7])
                db.run(insert, ['Vallmo', 'Vallmosläktet är ett växtsläkte med omkring 120 arter i familjen. Var förr mycket vanlig på åkrar där man odlade korn. Numera ser man den oftast på åkerrenar och vägkanter. Vallmosläktet odlades redan 5 000 år före Kristus i Mesopotamien och de har t om påträffats i egyptiska gravar.', 'vallmo.jpg', 2, 8])
                db.run(insert, ['Blåklocka', 'Blåklocka är en ganska späd, flerårig ört, den växer ofta i glesa tuvor med veka uppstigande stjälkar och blir bara ett par decimeter hög. Blåklocka och/eller ängsklocka är Dalarnas landskapsblomma.\n', 'blaklocka.jpg', 2, 9])
                db.run(insert, ['Rödklöver', 'Rödklöver blommar hela sommaren och fortsätter att blomma till långt in på hösten. Rödklöver är vanlig i hela landet och den odlas också ofta som vallväxt. Den växer vanligen på kulturpåverkad mark.', 'rodklover.jpg', 2, 10])
            }
        })
    }
})

module.exports = db