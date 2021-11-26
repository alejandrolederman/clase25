
const path = require("path");
const express = require("express");
const app = express();
const methodOverride =  require('method-override');


const indexRouter = require('./router/indexRouter');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const publiPath = path.resolve(__dirname,"./public");
app.use(express.static(publiPath));

const port = process.env.PORT || 3002;

// Uso de las routes
app.use('/', indexRouter);


app.listen (port, ()=>{
    console.log ("el servidor inicio en el puerto: " + port)
});
