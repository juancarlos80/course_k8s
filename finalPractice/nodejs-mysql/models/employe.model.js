module.exports = (sequelize, Sequelize) => {
    const Employe = sequelize.define("employe", {
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      rol: {
        type: Sequelize.STRING
      }
    });
  
    return Employe;
  };