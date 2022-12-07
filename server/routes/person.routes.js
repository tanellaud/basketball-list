module.exports = app => {
    const persons = require('../controllers/person.controller.js');
  
    const router = require('express').Router();
  
    // Create a new Person
    router.post('/', persons.create);
  
    // Retrieve all Persons
    router.get('/', persons.findAll);
  
    // Retrieve all active Persons
    router.get('/active', persons.findAllActive);
  
    // Retrieve a single Person with id
    router.get('/:id', persons.findOne);
  
    // Update a Person with id
    router.put('/:id', persons.update);
  
    // Delete a Person with id
    router.delete('/:id', persons.delete);
  
    // Create a new Person
    router.delete('/', persons.deleteAll);
  
    app.use('/api/persons', router);
  };