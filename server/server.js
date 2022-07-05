let express = require('express');
var bodyParser = require('body-parser');

let app = express();
const port = process.env.PORT || 3000;

const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes

//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
const fs = require('fs');
//https://nodejs.org/api/path.html
const path = require('path');

const dataPath = './data/';

const cors = require('cors');
let corsOptions = {
    origin: 'http://localhost:8080',
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/v1/products', (req, res) => {
    let fileLoc = path.resolve(dataPath + 'products.json');
    fs.readFile(fileLoc, 'utf8', (error, text) => {
        if (error) {
            console.error(`Fehler und hier die Fehlermeldung: ${error}`);
            res.send(`Ein Fehler ist passiert! Benachrichtigen Sie den Admin.`);
        } else {
            try {
                res.send(text);
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });
});


//TODO:anpassen evt entfernen
app.post('/api/contact', (req, res) => {
    res.send('OK');
});