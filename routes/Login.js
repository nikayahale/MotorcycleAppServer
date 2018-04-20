const router = require('express').Router();
const sequelize = require('../db.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var User = sequelize.import('../models/User.js');

router.post('/', function (req, res){
    User.findOne({where:{username: req.body.user.username}})
    .then(
        function(user){
            if(user){
                bcrypt.compare(req.body.user.password, user.password, function(err, matches){
                    if(matches){

                        var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn:60*60*24});
                        console.log(token)
                        res.json({
                            user: user,
                            message: "Logged in successfully",
                            sessionToken: token
                        });
                    } else {
                        res.status(500).send({error: "wrong password"})
                    }
                });
            } else {
                res.status(500).send({error: "User does not exhist"})
            }
        },
        function(err){
            res.json(err);
        }
    )
})

module.exports = router;