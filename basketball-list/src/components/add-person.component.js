import React, { useState } from "react";
import PersonDataService from "../services/personService"

const AddPerson = () => {
  const initialPersonState = {
    id: null,
    name: "",
    email: "",
    active: false
  };
  const [person, setPerson] = useState(initialPersonState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPerson({ ...person, [name]: value });
  };

  const savePerson = () => {
    var data = {
      name: person.name,
      email: person.email
    };

    PersonDataService.create(data)
      .then(response => {
        setPerson({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          active: response.data.active
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newPerson = () => {
    setPerson(initialPersonState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Uus Põrgataja lisatud!</h4>
          <button className="btn btn-success" onClick={newPerson}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={person.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              required
              value={person.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>

          <button onClick={savePerson} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPerson;