import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Text from './pages/Text'
import TableSample from './pages/TableSample'
import {Route, Switch} from 'react-router-dom'

const Body = () => (
  <Switch>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/text" component={Text} />
      <Route path="/table" component={TableSample} />
    </div>
  </Switch>
);

export default Body