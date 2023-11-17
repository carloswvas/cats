const { DataTypes } = require("sequelize");

const db = require('../db/conn')

const Publication = db.define('Publications',{
    image:{
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    }
})

module.exports = Publication