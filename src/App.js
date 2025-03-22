import React from 'react';
import './App.css';
// import GlobalHeader from './GlobalHeader'
// import Footer from './Footer'
import { Route, Switch } from "react-router-dom"
import music from "./Music"

function App() {
  return (
    <Switch>
      <Route exact path="/music" component={music} />
      <Route path="/:id" component={music} />
    </Switch>
    // <div className="App">
    //   <GlobalHeader />
    //   <Footer />
    // </div >
  );
}

export default App;
