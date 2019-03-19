module.exports = (sequelize, DataTypes) => {
  const RegisterTournment = sequelize.define('RegisterTournment', {})
  RegisterTournment.associate = function (models) {
    RegisterTournment.belongsTo(models.User)
    RegisterTournment.belongsTo(models.Tournment)
  }
  return RegisterTournment
}
