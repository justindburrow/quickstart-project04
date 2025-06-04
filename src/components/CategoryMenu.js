import React from 'react';

const CategoryMenu = ({ categories, onSelect }) => (
    <div className="category-menu">
        <h3>Categories</h3>
        <ul>
            {categories.map(cat => (
                <li key={cat.id}>
                    <button onClick={() => onSelect(cat.id)}>{cat.name}</button>
                </li>
            ))}
        </ul>
    </div>
);

export default CategoryMenu;