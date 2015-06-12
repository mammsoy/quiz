var models = require('../models/models.js');

exports.question = function (req, res) {

	res.render ('quizes/question', { title: 'Quiz', pregunta: 'Capital de Italia'});

};

exports.answer = function (req, res) {

	if ( req.query.respuesta === 'Roma' ) {

		res.render ('quizes/answer', { title: 'Quiz', respuesta: 'Correcto'});

	} else {

		res.render ('quizes/answer', { title: 'Quiz', respuesta: 'Incorrecto'});

	}

};

exports.author = function (req, res) {

	res.render ('quizes/authors', { title: 'Quiz' });

};

exports.findQuestions = function (req, res) {

	console.log ('Buscar: ' + "%" + req.params.search + "%");

	if ( !req.query.search ) {

		res.render ('quizes/findQuestionsIndex', { title: 'Quiz' });

	} else {

		models.Quiz.findAll({where: ["pregunta like ?", "%" + req.query.search + "%"]}).success(function (questions){

		console.log ('Encontrados: ' + questions.length);

		res.render ('quizes/questionsList', { title: 'Quiz', questionsList: questions });

	});

	}
	
};