const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

//Index Route
breads.get('/', (req, res) => {
  Bread
    .find()
    .then(foundBreads => {
        res.render('index', {
            breads: foundBreads,
            title: 'Index Page'
          })
      })
})



// NEW Route
breads.get('/new', (req, res) => {
    res.render('New')
})

// SHOW Route
breads.get('/:id', (req, res) => {
    if (req.params.id) {
      Bread
          .findById(req.params.id)
          .then(foundBread => {
            res.render(
              'Show',
              {
                  bread: foundBread,
                  id: req.params.id
              })
          })
          .catch(err => {
            res.render('404')
          })
    } else {
      res.render('notFound')
    }
  })
  
// CREATE Route
breads.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = undefined
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
  })
  
// DELETE Route
breads.delete('/:id', (req, res) => {
  Bread.splice(req.params.arrayIndex, 1)
  res.status(303).redirect('/breads')
})

// EDIT Route
breads.get('/:arrayIndex/edit', (req, res) => {
  res.render('Edit', {
    bread: Bread[req.params.arrayIndex],
    index: req.params.arrayIndex
  })
})


// UPDATE Route
breads.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})


module.exports = breads