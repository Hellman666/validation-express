var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.render('index.ejs', {

    })

})

const port = 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })