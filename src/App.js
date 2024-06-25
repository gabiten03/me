import './App.css';

import Header from './components/Header/Header';

import Portfolio from './components/Portfolio/Portfolio';

import Landpage from './components/LandPage/Landpage';
import MeHi from './components/MeHi/MeHi';


import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/Contacto">

        </Route>
        <Route path="/Portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <Landpage></Landpage>
          <MeHi />

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
