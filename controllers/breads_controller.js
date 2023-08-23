const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

//Index
breads.get('/', (req, res) => {
    res.render('Index', 
        {
            breads: Bread
        }
    )
    //res.send(Bread)
})

module.exports = breads

//Show
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})
