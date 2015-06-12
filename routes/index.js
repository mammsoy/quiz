var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get ('/quizes', quizController.findQuestions);
router.get ('/quizes/question', quizController.question);
router.get ('/quizes/answer', quizController.answer);
router.get ('/author', quizController.author);

module.exports = router;
