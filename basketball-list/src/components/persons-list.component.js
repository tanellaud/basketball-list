import React, { useState, useEffect } from "react";
import PersonDataService from "../services/personService";
import Switch from '@mui/material/Switch';
import Moment from 'react-moment';
import _ from 'lodash';

const PersonsList = () => {
  const initialPersonState = {
    id: null,
    name: '',
    email: '',
    active: false
  };
  const [persons, setPersons] = useState([]);
  const [currentPerson, setCurrentPerson] = useState(initialPersonState);

  useEffect(() => {
    retrievePersons();
  }, []);
  
  const retrievePersons = () => {
    PersonDataService.getAll()
      .then(response => {
       const sortedArray =  _.sortBy(response.data, 'active', function(n) {
          return Math.sin(-n);
        }).reverse();

        setPersons(sortedArray);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrievePersons();
  };

 const countType = () => {
      const countTypes = Object.values(persons).filter(person => person.active === true);
      return countTypes.length;
  }
  const getThursday = () => {
    let d = new Date();
    d.setDate(d.getDate() + (4 + 7 - d.getDay()) % 7);

    return d;
  }

  const updateActive = person => {
    var data = {
      id: person.id,
      name: person.name,
      email: person.email,
      active: person.active ? false : true
    };

    PersonDataService.update(person.id, data)
      .then(response => {
        setCurrentPerson({ ...currentPerson, active: person.active });
        refreshList();
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return( 
      <div className="wrap">
        <h1>Korvpalli nimekiri</h1>
        <h2>Järgmine trenn - <Moment format="YYYY/MM/DD">{getThursday()}</Moment> neljapäev Kell 19:00</h2>
        <h2>Asukoht - <a href="https://goo.gl/maps/rHEaeJUEWvF63Vjd9" target="_blank">Kristiine spordikeskus</a></h2>
        <h2>Tulijaid <span className="count">{countType()}</span></h2>

        <ul className="personsList">
          {persons &&
            persons.map((person, index) => (
                <li
                  onClick={() => updateActive(person)}
                  className={
                    "list-group-item " +
                    (person.active === true ? "active" : "")
                  }
                  key={index}
                >
                {person.name}
                <Switch
                  checked={person.active}
                  onChange={() => updateActive(person)}
                />
                </li>
            ))}
        </ul>
      </div>
    )
  };

  export default PersonsList;
