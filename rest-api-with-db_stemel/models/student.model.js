module.exports = (sequelize, Sequelize) => {

  return sequelize.define("student", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    className: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    fatherName: {
      type: Sequelize.STRING
    }
  });
}


