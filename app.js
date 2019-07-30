const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

let arr = [];
let eventCode = Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100;

app.get('/', (req,res) => {
    res.render('index', {data: arr, eventCode: eventCode});
});

app.post('/', (req,res) => {
    arr.push(req.body.name);
    // setTimeout(() => {
    //     res.redirect('/');
    // }, 3000);

    res.redirect('/');
});

app.post('/remove', (req,res) => {

  var index = arr.indexOf(req.body.name);

  arr.splice(index, 1);

  res.redirect('/')
});

app.listen(3000, () => {

    console.log("Server Running On Port 3000");
});
