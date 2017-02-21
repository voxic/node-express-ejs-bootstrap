//load modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//set view engine to ejs
app.set('view engine', 'ejs');

//set upp public directory to serve static files
app.use(express.static('public'));

//Initiate bodyParser to parse request body
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



//Routes

app.get('/',requiredAuthentication, (req, res) => {
    res.render('main', {user: req.session});
});


// Run server
console.log("Server is listening...")
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));