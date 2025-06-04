import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CategoryMenu from './CategoryMenu';
import QuestionList from './QuestionList';
import AskQuestion from './AskQuestion';

const Dashboard = () => {
    const [username, setUsername] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [refreshQuestions, setRefreshQuestions] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const cats = [
            { name: 'Birds', id: 'birds' },
            { name: 'Dogs', id: 'dogs' },
            { name: 'Cats', id: 'cats' },
            { name: 'Rabbits', id: 'rabbits' }
        ];
        setCategories(cats);
        setUsername(localStorage.getItem('username') || 'User');
        setSelectedCategory(null); // <-- Show latest 5 questions from all categories by default
    }, []);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="dashboard">
            <h1>Welcome to the Forum, {username}!</h1>
            <button onClick={handleLogout}>Logout</button>
            <div className="dashboard-content">
                <CategoryMenu categories={categories} onSelect={handleCategorySelect} />
                <QuestionList
                    category={selectedCategory}
                    refresh={() => setRefreshQuestions(r => !r)}
                />
                <AskQuestion
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onQuestionPosted={() => setRefreshQuestions(r => !r)}
                />
            </div>
        </div>
    );
};

export default Dashboard;