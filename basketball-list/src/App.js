import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AddPerson from "./components/add-person.component";
import PersonsList from "./components/persons-list.component";


function App() {
  return (
    <Router>
       <Switch>
          <Route exact path="/" component={PersonsList} />
          <Route exact path="/add" component={AddPerson} />
        </Switch>
    </Router>
  );
}

export default App;
