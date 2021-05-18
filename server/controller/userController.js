const User = require('../models/userModel')

exports.signUp =  (req, res) => {

    User.findOne({
        'email': req.body.email
    }, (err, user) => {
        if (err) return res.json(err);

        if (user) {
            return res.json({'status':200,'message':'Email is already registered'});
        } else {
            var newUser = new User();
            newUser.username = req.body.username;
            newUser.email = req.body.email;
            newUser.password = newUser.generateHash(req.body.password);

            try {
                newUser.save();
                res.json({'status':201,'message':'Successfully Registered','user':newUser});
            } catch (err) {
                res.json(err);
            }
        }
    })

}