const Sequelize = require('sequelize');

const sequelize = new Sequelize('MotorcycleLog', 'postgres', 'ducati848', {
    dialect: 'postgres',
    port: 5432
});

sequelize.authenticate().then(
    function(){
        console.log("You're connected to MotorcycleLog database!")
    },
    function(err){
        console.log(err)
    }
);

module.exports = sequelize;