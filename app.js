const express = require('express')

//create an express app
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const favicon = require('serve-favicon');
const PORT = process.env.PORT || 3000;

app.use(favicon(__dirname + '/public/assets/images/favicon/favicon.png'));

app.use(express.json())


//sets our app to use the handlebars engine
app.set('view engine', 'hbs')

//req.body object can be accessed in our routes
app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
  defaultLayout: 'main_layout',
  extname: 'hbs' //new configuration parameter
}))

app.use(express.static('public')) //used for stylesheets


require('./routes/routes.js')(app)

app.listen(PORT , function () {
  console.log('App is listening on port 3000!');
});