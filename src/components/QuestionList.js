import React, { useEffect, useState } from 'react';

const QuestionList = ({ category, refresh }) => {
    const [questions, setQuestions] = useState([]);
    const [answerInputs, setAnswerInputs] = useState({});

    useEffect(() => {
        const fetchQuestions = async () => {
            let url;
            if (category) {
                url = `http://localhost:5001/api/questions/category/${category}`;
            } else {
                url = `http://localhost:5001/api/questions/`;
            }
            const res = await fetch(url);
            let data = await res.json();
            if (!category) {
                data = data
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .slice(0, 5);
            }
            setQuestions(data);
        };
        fetchQuestions();
    }, [category, refresh]);

    // Handle answer input change
    const handleInputChange = (questionId, value) => {
        setAnswerInputs(prev => ({ ...prev, [questionId]: value }));
    };

    // Handle answer submit
    const handleAnswerSubmit = async (questionId) => {
        const answer = answerInputs[questionId];
        if (!answer) return;
        const token = localStorage.getItem('token');
        await fetch(`http://localhost:5001/api/questions/${questionId}/answer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            },
            body: JSON.stringify({ answer })
        });
        setAnswerInputs(prev => ({ ...prev, [questionId]: '' }));
        if (typeof refresh === 'function') refresh();
    };

    // Handle delete question
    const handleDeleteQuestion = async (questionId) => {
        const token = localStorage.getItem('token');
        await fetch(`http://localhost:5001/api/questions/${questionId}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        if (typeof refresh === 'function') refresh();
    };

    // Handle delete answer
    const handleDeleteAnswer = async (questionId, answerId) => {
        const token = localStorage.getItem('token');
        await fetch(`http://localhost:5001/api/questions/${questionId}/answer/${answerId}`, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        if (typeof refresh === 'function') refresh();
    };

    return (
        <div className="question-list">
            <h3>{category ? "Questions" : "Latest 5 Questions"}</h3>
            <ul>
                {questions.map(q => (
                    <li key={q._id}>
                        <strong>{q.title}</strong>
                        <p>{q.content}</p>
                        <small>
                            asked by {q.user?.username || 'Unknown'}
                        </small>
                        <div style={{marginTop: '10px', marginBottom: '10px'}}>
                            <strong>Answers:</strong>
                            <ul>
                                {(q.answers || []).slice(-5).reverse().map((a, idx) => (
                                    <li key={a._id || idx} style={{marginBottom: '6px'}}>
                                        {a.answer}
                                        <br />
                                        <small>
                                            answered by {a.user?.username || 'Unknown'}
                                        </small>
                                        <button
                                            onClick={() => handleDeleteAnswer(q._id, a._id)}
                                            className="delete-btn"
                                        >
                                            Delete Answer
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                handleAnswerSubmit(q._id);
                            }}
                            style={{marginTop: '10px'}}
                        >
                            <input
                                type="text"
                                placeholder="Your answer..."
                                value={answerInputs[q._id] || ''}
                                onChange={e => handleInputChange(q._id, e.target.value)}
                                style={{width: '70%', marginRight: '8px'}}
                            />
                            <button type="submit">Answer</button>
                        </form>
                        <button
                            onClick={() => handleDeleteQuestion(q._id)}
                            className="delete-btn"
                        >
                            Delete Question
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionList;