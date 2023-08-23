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

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
      res.render('Show', {
        bread:Bread[req.params.arrayIndex]
      })
    } else {
      res.render('Not Found')
    }
  })
  