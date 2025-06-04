const mongoose = require('mongoose');
const User = require('../backend/src/models/user');
const Question = require('../backend/src/models/question');

const seedDatabase = async () => {
    await mongoose.connect('mongodb://localhost:27017/forum-app', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    await User.deleteMany({});
    await Question.deleteMany({});

    const users = await User.insertMany([
        { username: 'john_doe', password: 'password123' },
        { username: 'jane_smith', password: 'password456' },
    ]);

    const questions = await Question.insertMany([
        { title: 'How to learn Node.js?', content: 'I am new to Node.js and need some guidance.', user: users[0]._id },
        { title: 'What is Express.js?', content: 'Can someone explain what Express.js is and its use cases?', user: users[1]._id },
    ]);

    console.log('Database seeded successfully!');
    mongoose.connection.close();
};

seedDatabase().catch(err => {
    console.error('Error seeding database:', err);
    mongoose.connection.close();
});