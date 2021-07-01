const path = require('path');
const express = require('express');
const morgan = require('morgan');
var exphbs = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
//Template engine
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//HTTP logger
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});