import './App.css';
import { BrowserRouter, HashRouter, Switch, Route} from 'react-router-dom';
import Header from './Components/Header.js';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
function App() {
  return (
    // <HashRouter basename="/hectaways-business-solutions" hashType="noslash">
    <BrowserRouter basename="/hectaways-business-solutions" >
      <div className="container-fluid">
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
    </div>
    </BrowserRouter>
  );
}

export default App;
