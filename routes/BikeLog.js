var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user.js');
var BikeLog = sequelize.import('../models/BikeLog.js');

router.post('/', function (req, res){
    BikeLog.create({
        bike: req.body.BikeLog.bike,
        mileage: req.body.BikeLog.mileage,
        gas: req.body.BikeLog.gas,
        maintenance: req.body.BikeLog.maintenance,
        owner: req.user.id
    })
    .then(
        function createSuccess(log){
            res.json({
                bikelog: log,
                message: "it worked"
            })
        }
    )
})

router.get('/', function (req, res){
    var userid = req.user.id;
    console.log(userid)
    BikeLog.findAll({ where: {owner: userid}})
    .then(
        function findAllSuccess(data){
            res.json(data)
        },
        function findAllError(err){
            console.log('SHOW AN ERROR')
            res.send(500, err.message)
        }
    )
})

router.delete('/', function(req, res){
    var dataid = req.params.id;
    BikeLog.destroy({ where: {id: dataID}})
    .then(
        function deleteLogSucess(data){
            res.send("You removed a log!");
        },
        function deleteLogError(err){
            res.send(500, err.message)
        }
    )
})

router.get('/:id', function(req,res){
    var dataID = req.params.id;
    Bikelog.findOne({ where: {id: dataID}})
    .then(
        function getSucess(data){
            res.json(data)
        },
        function getError(err){
            res.send(500, err.message)
        }
    )
})

router.put('/:id', function(req, res){
    BikeLog.update({
        bike: req.body.BikeLog.bike,
        mileage: req.body.BikeLog.mileage,
        gas: req.body.Bikelog.gas,
        maintenance: req.body.BikeLog.maintenance
    }, {where: {id: data}})
    .then(
        function updateSucess(updatedata){
            res.json(updateData)
        },
        function updateError(err){
            res.send(500,err.message)
        }
    )
})

module.exports = router;