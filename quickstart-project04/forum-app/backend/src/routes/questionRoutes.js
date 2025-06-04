const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to create a new question
router.post('/', authMiddleware.verifyToken, questionController.createQuestion);

// Route to get all questions
router.get('/', questionController.getAllQuestions);

// Route to get questions by category
router.get('/category/:categoryId', questionController.getQuestionsByCategory);

// Route to answer a question
router.post('/:questionId/answer', authMiddleware.verifyToken, questionController.answerQuestion);

// Route to delete a question
router.delete('/:questionId', authMiddleware.verifyToken, questionController.deleteQuestion);

// Route to delete an answer to a question
router.delete('/:questionId/answer/:answerId', authMiddleware.verifyToken, questionController.deleteAnswer);

module.exports = router;