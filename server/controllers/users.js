const Users   = require('../models/users')
const bcrypt  = require('bcryptjs')
const jwt     = require('jsonwebtoken')
const FB      = require('fb')

module.exports = {
  signupUser: (req, res) => {
    user.create({
      name      : req.body.name,
      email     : req.body.email,
      password  : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
      role      : 'user'
    })
    .then(user => {
      res.status(200).json({
        message: 'Success register new user',
        user
      })
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
  },

  signupReseller: (req, res) => {
    user.create({
      name      : req.body.name,
      email     : req.body.email,
      password  : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
      role      : 'reseller'
    })
    .then(user => {
      res.status(200).json({
        message: 'Success register new reseller',
        user
      })
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
  },

  loginFacebook: (req, res) => {
    // console.log('loginn... token ', req.headers.fbtoken)
    if (req.headers.fbtoken) {
      FB.setAccessToken(req.headers.fbtoken)
      FB.api('/me', { fields: 'name, email, picture' })
      .then(data => {
        Users.findOne({
          name    : data.name,
          email   : data.email
        })
        .then(user => {
          // console.log(user)
          if (user) {
            if (user.role == req.headers.role) {
              jwt.sign({ user }, process.env.JWT_KEY, (err, token) => {
                console.log(user)
                res.status(200).json({
                  message   : `logged in ${user.name}`,              
                  name      : user.name, 
                  email     : user.email,
                  role      : user.role,
                  photo     : user.photo,
                  apptoken  : token,
                })
              })
            } else {
              res.status(203).json({ message: `You dont have authorization as ${req.headers.role} !!` })
            }
          } else {
            // console.log('create new user')
            Users.create({
              name    : data.name,
              email   : data.email,
              photo   : data.picture.data.url,
              role    : req.headers.role
            })
            .then(userCreated => {
              let user = userCreated
              // console.log(user)
              jwt.sign({ user }, process.env.JWT_KEY, (err, token) => {
                console.log(user)
                res.status(200).json({                
                  message   : `new user ${user.name}`,
                  name      : user.name, 
                  email     : user.email,
                  role      : user.role,
                  photo     : user.photo,
                  apptoken  : token,
                })
              })
            })
            .catch(err => {
              console.log('errr', err.message)
              res.status(400).json({ message: err.message })
            })
          }
        })
        .catch(err => {
          res.status(500).json({ message: 'error on ', err })
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'error on ', err })
      })
    } else {
      res.status(400).json({ message: 'unknow fb token' })
    }
  }
}