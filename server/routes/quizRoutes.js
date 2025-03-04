const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.post('/curl', quizController.curlQuiz);

module.exports = router;
