const express = require('express')
const router  = express.Router()
const auth    = require('../middleware/authorization')
const { signupReseller, signupUser, loginFacebook } = require('../controllers/users')

router.post('/signup-user', signupUser)
router.post('/signup-reseller', signupReseller)
router.get('/login-fb', loginFacebook)

module.exports = router;
