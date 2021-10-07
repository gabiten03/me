import './App.css';
import { Spacer } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode';
import Header from './components/Header/Header';
import Contacto from './components/Contacto/Contacto';
import Portfolio from './components/Portfolio/Portfolio';
import Landpage from './components/LandPage/Landpage';
import MeHi from './components/MeHi/MeHi';


import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {

  const { colorMode } = useColorMode();
  return (

    <Router>

      <Header />
      <Switch>

        <Route path="/Contacto">
          <Contacto />
        </Route>
        <Route path="/Portfolio">
          <Portfolio />
        </Route>

        <Route path="/">
          <Landpage></Landpage>
          <Spacer />
          <MeHi />
        </Route>
      </Switch>

    </Router>





  );
}

export default App;
