import './App.css';
import { Spacer } from '@chakra-ui/react'
import Header from './components/Header/Header';

import Portfolio from './components/Portfolio/Portfolio';
import PortfolioItem from './components/PortfolioItem/PortfolioItem'
import Landpage from './components/LandPage/Landpage';
<<<<<<< HEAD
import MeHi from './components/MeHi/MeHi';
import CardsContainer from './components/CardsContainer/CardsContainer';
=======
import Footer from './components/Footer/Footer';
import { Divider } from "@chakra-ui/react"
import Features from './components/Features/Features';

>>>>>>> d28bb9792e3b7b5e4518bb98480c9fc7c4d16bf8

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
<<<<<<< HEAD

=======
>>>>>>> d28bb9792e3b7b5e4518bb98480c9fc7c4d16bf8
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/Contacto">

        </Route>
        <Route path="/Portfolio">
<<<<<<< HEAD
          <Portfolio />
        </Route>
        <Route path="/">
          <Landpage></Landpage>
          <MeHi />
          <CardsContainer />
          <Portfolio />
          <Spacer />
          <PortfolioItem />
=======

        </Route>
        <Route path="/">
          <Landpage></Landpage>
          <Divider />
          <Portfolio />
          <Divider />
          <Features />
          <Footer />

          <Spacer />
>>>>>>> d28bb9792e3b7b5e4518bb98480c9fc7c4d16bf8
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
