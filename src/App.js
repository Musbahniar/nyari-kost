import React from 'react';
import { Switch, Route } from "react-router-dom";
import "./App.css";


import Home from "./pages/Home"
import NavBar from './components/NavBar';
import Koss from './pages/Koss'
import Kotas from './pages/Kotas'
import DetailKos from './pages/DetailKos'
import Error from './pages/Error'
import Tentang from './pages/About'

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/koss" component={Koss} />
        <Route exact path="/about" component={Tentang} />
        <Route exact path="/kota/:kota" component={Kotas} />
        <Route exact path="/koss/:slug" component={DetailKos} />
        <Route component={Error} /> 
      </Switch>
    </>
  );
}

export default App;
