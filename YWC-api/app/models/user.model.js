const { INTEGER } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      fullname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }, 
      about: {
        type: Sequelize.TEXT
      }
    });
  
    return User;
  };