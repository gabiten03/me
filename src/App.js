import './App.css';
import { Spacer } from '@chakra-ui/react'
import Header from './components/Header/Header';

import Portfolio from './components/Portfolio/Portfolio';
import Landpage from './components/LandPage/Landpage';
import Footer from './components/Footer/Footer';
import { Divider } from "@chakra-ui/react"
import Features from './components/Features/Features';


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

        </Route>
        <Route path="/">
          <Landpage></Landpage>
          <Divider />
          <Portfolio />
          <Divider />
          <Features />
          <Footer />

          <Spacer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
