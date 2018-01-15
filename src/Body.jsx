import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Text from './pages/Text'
import TableSample from './pages/TestTable'
import {Route, Switch} from 'react-router-dom'
import Display from './pages/Display'

const Body = () => (
  <Switch>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/text" component={Text} />
      <Route path="/test_table" component={TableSample} />
      <Route path="/display" component={Display} />
    </div>
  </Switch>
);

export default Body