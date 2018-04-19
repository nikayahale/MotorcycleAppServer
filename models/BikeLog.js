module.exports = function(sequelize, DataTypes){
    var BikeLog = sequelize.define('BikeLog', {
        bike: DataTypes.STRING,
        mileage: DataTypes.INTEGER,
        gas: DataTypes.INTEGER,
        maintenance: DataTypes.STRING
    })
    return BikeLog;
}