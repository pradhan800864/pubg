const Joi = require('joi')

module.exports = {
  userregister (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      ),
      age: Joi.string().regex(
        new RegExp('^[0-9]{2,4}$')
      ),
      country: Joi.string().regex(
        new RegExp('^[a-zA-Z]{2,32}$')
      )
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'you must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided is failed due to security reasons:
            <br>
            1.it must contain lowercase,uppercase and number as well.<br>
            2.it must have minimum of 8 charecters and maximum of 32 charecters in it.
            `
          })
          break
        case 'age':
          res.status(400).send({
            error: 'for registering you have to have the minimum of 16+ years'
          })
          break
        case 'country':
          res.status(400).send({
            error: 'you have to provide the country name in text'
          })
          break
        default:
          this.register.status(400).send({
            error: 'invalid user credentials'
          })
      }
    } else {
      next()
    }
  }
}
