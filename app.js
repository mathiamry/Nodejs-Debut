const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pageNotFoundController = require('./controllers/404.js');

app.set('view engine', 'ejs');
app.set('views', 'views');
const router = express.Router();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(pageNotFoundController.pageNotFound);

app.listen(3000);

module.exports = router;