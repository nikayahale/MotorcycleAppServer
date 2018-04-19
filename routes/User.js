const router = require('express').Router();
const sequelize = require('../db.js');
const User = sequelize.import('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/', function(req, res) {
    User.create({
        username: req.body.User.username,
        password : bcrypt.hashSync(req.body.User.password, 10)
    }).then(
        function createSuccess(user) {
            var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
            res.json({
                user: user,
                message: 'created',
                sessionToken: token
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
});

module.exports = router;