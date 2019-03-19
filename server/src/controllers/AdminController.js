const { Admin } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (admin) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(admin, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const admin = await Admin.create(req.body)
      res.send(admin.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email address is already in use'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const admin = await Admin.findOne({
        where: {
          email: email
        }
      })
      if (!admin) {
        return res.status(403).send({
          error: 'this login information was in correct'
        })
      }
      const ispasswordvalid = await admin.comparePassword(password)
      if (!ispasswordvalid) {
        return res.status(403).send({
          error: 'this login information was incorrect'
        })
      }
      const adminJson = admin.toJSON()
      res.send({ admin: adminJson,
        token: jwtSignUser(adminJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'Error has occured when admin is trying to login'
      })
    }
  }
}
