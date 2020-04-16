var express = require('express')
var db = require('../models')
var router = express.Router()

router.get('/', (req, res) => {
    res.render('players/index')
})

router.get('/new', (req, res) => {
    db.team.findAll()
    .then(teams => {
        res.render('players/new', { teams })
    })
})

router.post('/', (req, res) => {
    db.player.create({
        name: 'David',
        wins: 1,
        losses: 1,
        pic: 'ffeff',
        bio: 'great player',
        teamId: 1
      })
      .then(function(plyer) {
        console.log(player.get())
        res.redirect('/' + req.body.teamId)
      })
      .catch((err) => {
          console.log(err)
          res.send('this is broken')
      })
    })

router.get('/:id', (req, res) => {
    res.render('players/show')
})

module.exports = router