const User = require("../models/user");



exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: " No user was found in DB"
            })


        }

        req.profile = user;
        //console.log(req.profile);
        next();
    })
};

exports.getUser = (req, res) => {

    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    req.profile.createAt = undefined;
    req.profile.updatedAt = undefined;
    return res.json(req.profile)
};



exports.getAllUsers = (req, res) => {

    User.find().exec((err, users) => {
        if (!users || err) {
            return res.status(400).json({
                err: "no users found"
            })
        }
        //var users = [];
        //users = users.concat(user);
        //console.log(users); 
        res.json(users);
    })
}


exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(
        { _id: req.profile._id },
        { $set: req.body },
        { new: true, useFindAndModify: false },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: "you are not authorized to update"
                })
            }
            user.salt = undefined;
            user.encry_password = undefined;
            user.createAt = undefined;
            user.updatedAt = undefined;
            res.json(user)
        }
    )
}

