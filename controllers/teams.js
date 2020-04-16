var express = require('express')
var db = require('../models')
var router = express.Router()

router.get('/', (req, res) => {
    db.team.findAll()
    .then(function(teams) {
      res.render('teams/index', { teams: teams })
    })
})
router.get('/new', (req, res) => {
 res.render('teams/new')
})


router.post('/', (req, res) => {
    db.team.create({
        name: 'David',
        description: 'something',
        pic: 'something.com'
      })
      .then(function(team) {
        console.log(team.get())
        res.redirect('/teams')
      })
      .catch((err) => {
          console.log(err)
          res.send('this is broken')
      })
    })


router.get('/:id', (req, res) => {
    res.render('teams/show')
})


module.exports = router