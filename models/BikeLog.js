module.exports = function(sequelize, DataTypes){
    var BikeLog = sequelize.define('BikeLog', {
        bike: DataTypes.STRING,
        mileage: DataTypes.INTEGER,
        gas: DataTypes.STRING,
        maintenance: DataTypes.STRING,
        owner: DataTypes.INTEGER
    })
    return BikeLog;
}