const express = require('express');
const router = express.Router();

const {loginUser,registerUser,adminLogin} = require('./../controller/userController');

router.post('/login',loginUser);
router.post('/register',registerUser);
router.post('/admin',adminLogin);

module.exports = router;