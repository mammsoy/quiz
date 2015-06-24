module.exports = function(sequelize, DataTypes) {

    return sequelize.define(
        'Quiz', {
            pregunta: {
            	type: DataTypes.STRING,
            	validate: { notEmpty: { msg: "Falta información"} }
            },
            respuesta: {
            	type: DataTypes.STRING,
            	validate: { notEmpty: { msg: "Falta información"} }
            },
            tema: {
                type: DataTypes.STRING,
                validate: { notEmpty: { msg: "Falta información"} }
            }
        }
    );

}
