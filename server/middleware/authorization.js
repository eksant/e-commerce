const jwt = require('jsonwebtoken')

module.exports = {
  token: (req, res, next) => {
    if (req.headers.apptoken) {
      jwt.verify(req.headers.apptoken, process.env.JWT_KEY, function(err, decoded) {
        if (!err) {
          req.decoded = decoded
          next()
        } else {
          res.status(400).json({ message: err })
        }
      })
    } else {
      res.status(202).json({ message : 'You must login !!' })
    }
  },

  roleAdmin: (req, res, next) => {
    if (req.headers.apptoken) {
      jwt.verify(req.headers.apptoken, process.env.JWT_KEY, function(err, decoded) {
        if (!err) {
          // console.log('role ===>', decoded)
          if (decoded.user.role == 'admin') {
            req.decoded = decoded
            next()
          } else {
            res.status(202).json({ message : 'You dont have authorize as Admin !!' })
          }
        } else {
          res.status(400).json({ message: err })
        }
      })
    } else {
      res.status(202).json({ message : 'You must login as Admin !!' })
    }
  },

  roleUser: (req, res, next) => {
    if (req.headers.apptoken) {
      jwt.verify(req.headers.apptoken, process.env.JWT_KEY, function(err, decoded) {
        if (!err) {
          if (decoded.user.role == 'user') {
            req.decoded = decoded
            next()
          } else {
            res.status(202).json({ message : 'You dont have authorize as User !!' })
          }
        } else {
          res.status(400).json({ message: err })
        }
      })
    } else {
      res.status(202).json({ message : 'You must login as User !!' })
    }
  }
}
