import './App.css';
import { Switch, BrowserRouter, Link, Route } from 'react-router-dom'
import { Home, About, Contact, Pricing } from './Pages'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/pricing">Pricing</Link>
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/pricing" component={Pricing} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
