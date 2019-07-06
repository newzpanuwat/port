import React from 'react'
import HeaderLayout from './components/HeaderLayout'
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


const App = () => (
  <div>

      <Router>
        <HeaderLayout />
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/about" component={Profile} />
          <Route exact path="/projects" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
  </div>
)

export default App