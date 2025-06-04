import React, { useState, useEffect } from 'react';

const AskQuestion = ({ categories, selectedCategory, onQuestionPosted }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState(selectedCategory || categories[0]?.id || '');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        setCategory(selectedCategory || categories[0]?.id || '');
    }, [selectedCategory, categories]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:5001/api/questions/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            },
            body: JSON.stringify({ title, content, category })
        });
        const data = await res.json();
        if (res.ok) {
            setSuccess('Question posted!');
            setTitle('');
            setContent('');
            setCategory(categories[0]?.id || '');
            if (onQuestionPosted) onQuestionPosted();
        } else {
            setError(data.message || 'Error posting question');
        }
    };

    return (
        <form className="ask-question" onSubmit={handleSubmit}>
            <h3>Ask a Question</h3>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            /><br />
            <textarea
                placeholder="Content"
                value={content}
                onChange={e => setContent(e.target.value)}
                required
            /><br />
            <select value={category} onChange={e => setCategory(e.target.value)}>
                {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
            </select><br />
            <button type="submit">Post Question</button>
            {error && <p style={{color:'red'}}>{error}</p>}
            {success && <p style={{color:'green'}}>{success}</p>}
        </form>
    );
};

export default AskQuestion;