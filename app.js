const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set("view engine", "ejs"); 
app.use(bodyParser.urlencoded({extended: true}));

let arr = [];

app.get('/', (req,res) => {
    res.render('index', {data: arr});
});

app.post('/', (req,res) => {
    arr.push(req.body.name);
    setTimeout(() => {
        res.redirect('/');  
    }, 3000);
});

app.listen(3000, () => {
    console.log("Server Running On Port 3000");
});