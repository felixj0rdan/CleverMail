const {sendMail, getMails} = require('../controllers/mail');
const express = require('express');
const router = express.Router();

router.post('/sendMail', sendMail);

router.get('/mails', getMails);


module.exports = router;