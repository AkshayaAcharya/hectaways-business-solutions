import './App.css';
import { HashRouter, Switch, Route, Link} from 'react-router-dom';
import Header from './Components/Header.js';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
function App() {
  return (
    <HashRouter basename="/" hashType="noslash">
    <Header /> 
      {/* <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
      </Switch> */}
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/services">
            <Services />
        </Route>
        <Route path="/contact">
            <Contact/>
        </Route>
    </Switch>
    </HashRouter>
  );
}

export default App;
