const { Tournment, RegisterTournment } = require('../models')
const _ = require('lodash')

module.exports = {
  async save (req, res) {
    try {
      const tournment = await Tournment.create(req.body)
      res.send(tournment)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured at the time of Creating tournment.'
      })
      console.log(err)
    }
  },
  async show (req, res) {
    try {
      const tournment = await Tournment.findAll({
        limit: 10
      })
      res.send(tournment)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured at the time of Retriving tournments to the front end.'
      })
      console.log(err)
    }
  },
  async showdetails (req, res) {
    try {
      const tournment = await Tournment.findById(req.params.TournmentId)
      res.send(tournment)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured at the time of Retriving tournment details to the front end.'
      })
      console.log(err)
    }
  },
  async post (req, res) {
    try {
      const UserId = req.params.userid
      const TournmentId = req.params.tournmentid
      console.log('THIS IS SOND ID', UserId)
      console.log('THIS IS USER ID', TournmentId)
      const tournment = await RegisterTournment.findOne({
        where: {
          UserId: UserId,
          TournmentId: TournmentId
        }
      })
      // console.log('bookmark', bookmark)
      if (tournment) {
        return res.status(400).send({
          error: 'you already have Registered this Tournment once'
        })
      }
      const newtournmentregister = await RegisterTournment.create({
        UserId: req.params.userid,
        TournmentId: req.params.tournmentid
      })
      console.log('newBookmark isssss', newtournmentregister)
      res.send(newtournmentregister)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured at the time of creating the Registration'
      })
      console.log(err)
    }
  },
  async check (req, res) {
    try {
      const { userid, tournmentid } = req.query
      const where = {
        UserId: userid
      }
      if (tournmentid) {
        where.tournmentid = tournmentid
      }
      const tournment = await RegisterTournment.findAll({
        where: where,
        include: [{
          model: Tournment
        }]
      })
        .map(tournment => tournment.toJSON())
        .map(tournment => _.extend(
          {},
          tournment.userid,
          tournment))
      res.send(tournment)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured at the time of fetching songs.'
      })
    }
  }
}
