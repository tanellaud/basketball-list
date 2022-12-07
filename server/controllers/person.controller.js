const db = require("../models");
const Person = db.persons;

// Create and Save a new Person
exports.create = (req, res) => {
  // Validate request
   if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Person
  const person = new Person({
    name: req.body.name,
    email: req.body.email,
    active: req.body.active ? req.body.active : false
  });

  // Save Person in the database
  person
    .save(person)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Person."
      });
    });
};

// Retrieve all Persons from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    Person.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving persons."
        });
      });
};

// Find a single Person with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Person.findById(id)
        .then(data => {
        if (!data)
            res.status(404).send({ message: "Not found Person with id " + id });
        else res.send(data);
        }).catch(err => {
            res
            .status(500)
            .send({ message: "Error retrieving Person with id=" + id });
        });
};

// Update a Person by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
    Person.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Person with id=${id}. Maybe Person was not found!`
            });
        } else res.send({ message: "Person was updated successfully." });
    }).catch(err => {
            res.status(500).send({
            message: "Error updating Person with id=" + id
        });
    });
};	

// Delete a Person with the specified id in the request
exports.delete = (req, res) => {
	const id = req.params.id;

	Person.findByIdAndRemove(id)
	  .then(data => {
		if (!data) {
		  res.status(404).send({
			message: `Cannot delete Person with id=${id}. Maybe Person was not found!`
		  });
		} else {
		  res.send({
			message: "Person was deleted successfully!"
		  });
		}
	  }).catch(err => {
		res.status(500).send({
		  message: "Could not delete Person with id=" + id
		});
	  });
};

// Delete all Persons from the database.
exports.deleteAll = (req, res) => {
	Person.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Persons were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all persons."
      });
    });
};

// Find all published Persons
exports.findAllActive = (req, res) => {
	Person.find({ published: true })
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving persons."
      });
    });
};