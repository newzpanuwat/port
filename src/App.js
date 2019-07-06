import React from 'react'
import HeaderLayout from './components/HeaderLayout'
import Landing from './components/Landing';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


const App = () => (
  <div>

      <Router>
        <HeaderLayout />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
  </div>
)

export default App