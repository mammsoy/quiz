//var tittle = 'Quiz';

var models = require('../models/models.js');
	
exports.load = function (req, res, next, quizId){

	models.Quiz.find(quizId).then(function(quiz){

		if (quiz) {
			
			req.quiz = quiz;
			next();

		} else {

			next(new Error('No existe pregunta con el identificador "' + quizId + '".'));

		}

	});
}

exports.question = function(req, res) {

	res.render('quizes/question', {
		title: tittle,
		pregunta: 'Capital de Italia',
		errors: null
	});

};

exports.answer = function(req, res) {

	if (req.query.respuesta === 'Roma') {

		res.render('quizes/answer', {
			title: tittle,
			respuesta: 'Correcto',
			errors: null
		});

	} else {

		res.render('quizes/answer', {
			title: tittle,
			respuesta: 'Incorrecto',
			errors: null
		});

	}

};

exports.author = function(req, res) {

	res.render('quizes/authors', {
		title: 'Quiz',
		errors: null
	});

};

exports.findQuestions = function(req, res) {

	if (req.query.search) {

		models.Quiz.findAll({
			where: ["pregunta like ?", "%" + req.query.search + "%"]
		}).success(function(questions) {

			res.render('quizes/questionsList', {
				title: tittle,
				questionsList: questions,
				errors: null
			});

		});

	} else {

		models.Quiz.findAll().success(function(questions) {

			res.render('quizes/questionsList', {
				title: tittle,
				questionsList: questions,
				errors: null
			});

		});
	}
};

exports.new = function(req, res) {

	var quiz = models.Quiz.build({
		pregunta: "pregunta",
		respuesta: "respuesta",
		tema: "otro",
		errors: null
	});

	res.render('quizes/doQuestion', {
		title: tittle,
		quiz: quiz,
		action: '/quiz/create',
		errors: null
	});

};

exports.create = function(req, res) {

	var quiz = models.Quiz.build(req.body.quiz);

	quiz.save().then(function() {

		res.redirect('/quizes');

	}).catch(function(error) {

		res.render('quizes/doQuestion', {
			title: tittle,
			quiz: quiz, 
			action: '/quiz/create',
			errors: error
		});

	});

};

exports.edit = function(req, res) {

	var quiz = req.quiz;

	res.render('quizes/doQuestion', {
		title: tittle,
		quiz: quiz,
		action: '/quiz/' + quiz.id + '?_method=put',
		errors: null
	});

};

exports.update = function(req, res) {

	var quiz = req.quiz;

	quiz.pregunta = req.body.quiz.pregunta;
	quiz.respuesta = req.body.quiz.respuesta;
	quiz.tema = req.body.quiz.tema;

	quiz.save().then(function() {

		res.redirect('/quizes');

	}).catch(function(error) {

		res.render('quizes/doQuestion', {
			title: tittle,
			quiz: quiz, 
			action: '/quiz/' + quiz.id + '?_method=put',
			errors: error
		});

	});

};

exports.delete = function(req, res) {
	
	var quiz = req.quiz;

	quiz.destroy().then(function() {

		res.redirect('/quizes');

	}).catch(function(error) {

		res.render('/quizes', {
			title: tittle,
			quiz: quiz,
			errors: error
		});

	});
};

