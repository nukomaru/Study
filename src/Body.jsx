import React from 'react'
import Home from './containers/Home'
import About from './containers/About'
import Text from './containers/Text'
import TableSample from './containers/TestTable'
import {Route, Switch} from 'react-router-dom'
import Display from './containers/Display'

const Body = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/text" component={Text} />
    <Route path="/test_table" component={TableSample} />
    <Route path="/display" component={Display} />
  </Switch>
);

export default Body