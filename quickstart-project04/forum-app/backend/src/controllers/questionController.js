const Question = require('../models/question');

// Create a new question
exports.createQuestion = async (req, res) => {
    const { title, content, category } = req.body;
    const userId = req.user.id; // Assuming user ID is available in req.user

    try {
        const newQuestion = new Question({
            title,
            content,
            category,
            user: userId,
        });

        await newQuestion.save();
        res.status(201).json({ message: 'Question created successfully', question: newQuestion });
    } catch (error) {
        res.status(500).json({ message: 'Error creating question', error: error.message });
    }
};

// Get all questions
exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find()
            .populate('user', 'username')
            .populate('answers.user', 'username'); // <-- populate answer users
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving questions', error: error.message });
    }
};

// Get questions by category
exports.getQuestionsByCategory = async (req, res) => {
    const { categoryId } = req.params;
    try {
        const questions = await Question.find({ category: categoryId })
            .populate('user', 'username')
            .populate('answers.user', 'username'); // <-- populate answer users
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving questions', error: error.message });
    }
};

// Answer a question
exports.answerQuestion = async (req, res) => {
    const { answer } = req.body;
    const userId = req.user.id; // Assuming user ID is available in req.user
    const { questionId } = req.params;

    try {
        const question = await Question.findById(questionId);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        question.answers.push({ answer, user: userId });
        await question.save();
        res.status(200).json({ message: 'Answer added successfully', question });
    } catch (error) {
        res.status(500).json({ message: 'Error answering question', error: error.message });
    }
};

// Delete a question
exports.deleteQuestion = async (req, res) => {
    const { questionId } = req.params;
    try {
        await Question.findByIdAndDelete(questionId);
        res.status(200).json({ message: 'Question deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting question', error: error.message });
    }
};

// Delete an answer
exports.deleteAnswer = async (req, res) => {
    const { questionId, answerId } = req.params;
    try {
        const question = await Question.findById(questionId);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        // Remove the answer by filtering
        question.answers = question.answers.filter(
            (ans) => ans._id.toString() !== answerId
        );
        await question.save();
        res.status(200).json({ message: 'Answer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting answer', error: error.message });
    }
};