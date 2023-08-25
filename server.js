//Dependencies
const express = require('express')

const methodOverride = require('method-override')


// Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Middleware
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

//Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page (Catch all page)
app.get('*', (req, res) => {
    res.render('notFound')
  })  

//Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})