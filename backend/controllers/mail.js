const Mail = require('../models/mail')

exports.sendMail = (req, res) => {
    const mail = new Mail(req.body);
    
    mail.save((err, mail) => {
        if (err) {
            return res.status(400).json({
                err: "NOT able to save mail in db"
            })
        }
        res.json({
            from: mail.from,
            to: mail.to,
            cc: mail.cc,
            scheduler: mail.scheduler,
            subject: mail.subject,
            content: mail.content,
        });
    });
}

// exports.getMail = (req, res) => {

// }

exports.getMails = (req, res) =>{
    
    Mail.find().exec((err,mails)=>{
        if(!mails || err){
            return res.status(400).json({
                err:"no users found"
            })
        }
    //var users = [];
    //users = users.concat(user);
    //console.log(users); 
    res.json(mails);
    })
}

exports.deleteMail = (req,res) =>{
    let mail = req.mail;
    mail.remove((err,deletedMail)=>{
      if(err){
        return res.status(400).json({
          err:"Failed to delete mail."
        })
      }
      res.json({
        message:"Deleted successfully.",
        deletedMail
      })
    })
  }

  exports.getMailById = (req, res, next, id) => {
    Mail.findById(id)
      .exec((err, mail) => {
        if (err) {
          return res.status(400).json({
            error: "mail not found in DB"
          });
        }
        req.mail = mail;
        next();
    });
  }