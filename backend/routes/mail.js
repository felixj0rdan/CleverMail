const {sendMail, getMails, deleteMail, getMailById} = require('../controllers/mail');
const express = require('express');
const { getUserById } = require('../controllers/user');
const router = express.Router();

router.param("userId",getUserById);
router.param("mailId",getMailById); 

router.post('/sendMail', sendMail);

router.get('/mails', getMails);

router.delete('/mails/:mailId/:userId', deleteMail)

module.exports = router;