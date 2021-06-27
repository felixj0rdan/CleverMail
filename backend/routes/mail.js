const {sendMail, getMails, deleteMail, getMailById, updateMail} = require('../controllers/mail');
const express = require('express');
const { getUserById } = require('../controllers/user');
const router = express.Router();

router.param("userId",getUserById);
router.param("mailId",getMailById); 

router.post('/sendMail', sendMail);
router.put("/updatemail/:mailId/",updateMail);

router.get('/mails', getMails);

router.delete('/mails/:mailId/:userId', deleteMail)

module.exports = router;