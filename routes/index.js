var express = require('express');
var router = express.Router();

//var tittle = 'Quiz';

/* GET home page. */
router.get('/', function(req, res) {
  
  res.render('index', { title: tittle, errors: null });

});

var quizController = require('../controllers/quiz_controller.js');
var sessionController = require('../controllers/session_controller.js');

router.param('quizId', quizController.load);

router.get ('/login', sessionController.new);
router.put ('/login', sessionController.create);
router.get ('/logout', sessionController.destroy);

router.get ('/author', quizController.author);
router.get ('/quizes', quizController.findQuestions);
router.get ('/quiz/new', quizController.new);
router.get ('/quiz/:quizId(\\d+)/edit', quizController.edit);
router.get ('/quiz/question', quizController.question);
router.get ('/quiz/answer', quizController.answer);

router.post ('/quiz/create', quizController.create);
router.put ('/quiz/:quizId(\\d+)', quizController.update);
router.delete ('/quiz/:quizId(\\d+)', quizController.delete);

module.exports = router;
