const express = require('express');
const helmet = require('helmet');
const db = require('./data/db-config');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/cars', async (req, res) => {
    try {
        const cars = await db('cars')
        return res.json(cars)
    } catch {
        return res.status(500).json({ message: 'Failed to retrieve cars' });
    }
});

server.post('/cars', async (req, res) => {
    try {
        const cars = await db('cars').insert(req.body)
        return res.json(cars)
    } catch {
        return res.status(500).json({ message: 'Failed to retrieve cars' });
    }
})

module.exports = server;
