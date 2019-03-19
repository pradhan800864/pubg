const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (admin) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(admin, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async userregister (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'Invalid login credentials'
      })
    }
  },
  async userlogin (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'this login information was in correct'
        })
      }
      const ispasswordvalid = await user.comparePassword(password)
      if (!ispasswordvalid) {
        return res.status(403).send({
          error: 'this login information was incorrect'
        })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'Error has occured when uer is trying to login'
      })
    }
  }
}
