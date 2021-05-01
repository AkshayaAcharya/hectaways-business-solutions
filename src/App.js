import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './Components/Header.js'
import Home from './Components/Home.js'
import About from './Components/About.js'
import Services from './Components/Services.js'
import Contact from './Components/Contact.js'
function App() {
  return (
    <Router>
      <Header /> 
      {/* <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
      </Switch> */}
    </Router>
  );
}

export default App;
