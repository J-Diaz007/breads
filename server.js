//Dependencies
const express = require('express')

const methodOverride = require('method-override')

//Requires mongoose so we can use it throughout our entire app
const mongoose = require('mongoose')

// Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => { console.log('connected to mongo: ', process.env.MONGO_URI) })

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