var express = require('express')
var app = express()
var mysql = require('mysql2');
var bodyParser = require('body-parser');
var path = require('path');
var bcrypt = require('bcrypt');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'validation',
})


db.connect(function(err) {
    if(err) throw err
    console.log('Database connected!')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set("views", path.join(__dirname, "views"))

app.get('/', (req, res) => {
    let sql = 'SELECT * FROM `typ_uzivatele`';
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.render('index.ejs', {
            result: result,
        })
    });
});

app.post('/', async (req, res) => {
    let jmeno = req.body.jmeno;
    let prijmeni = req.body.prijmeni;
    let email= req.body.email;
    let typ = req.body.typ;
    //let heslo = req.body.heslo;
    let hash =  bcrypt.hashSync(req.body.heslo, 10);

    var sql = "INSERT INTO uzivatel (jmeno,prijmeni,email,heslo,typ_uzivatele_id_typ) VALUES ('"+jmeno+"', '"+prijmeni+"','"+email+"','"+hash+"', '"+typ+"')";
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.render('posted.ejs');
        res.end();
    });
});


const port = 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })