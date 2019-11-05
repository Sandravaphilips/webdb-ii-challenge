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
        const addedCarId = await db('cars').insert(req.body);
        const addedCar = await db('cars').where({ id: addedCarId[0] })
        return res.json(addedCar)
    } catch {
        return res.status(500).json({ message: 'Failed to add car' });
    }
});

server.delete('/cars/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const deletedCar = await db('cars').where({ id: id })
        await db('cars').where({ id: id }).del();
        
        return res.json(deletedCar)
    } catch {
        return res.status(500).json({ message: 'Failed to delete car' });
    }
});

server.put('/cars/:id', async (req, res) => {
    const {id} = req.params;
    try {
        
        await db('cars').where({ id }).update(req.body);
        const updatedCar = await db('cars').where({ id: id })
        return res.json(updatedCar)
    } catch {
        return res.status(500).json({ message: 'Failed to update car changes' });
    }
});

module.exports = server;
