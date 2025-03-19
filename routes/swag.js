const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('get swag');
});

router.post('/', (req, res) => {
  res.status(201).send('post swag');
});

router.get('/:person', (req, res) => {
  const person = req.params.person;
  res.status(200).send(person);
});

module.exports = router;