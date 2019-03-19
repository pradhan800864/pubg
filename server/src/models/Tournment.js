module.exports = (sequelize, DataTypes) => {
  const Tournment = sequelize.define('Tournment', {
    server: DataTypes.STRING,
    map: DataTypes.STRING,
    mode: DataTypes.STRING,
    teamsize: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    entryfee: DataTypes.STRING,
    cashprize: DataTypes.STRING
  })
  return Tournment
}
