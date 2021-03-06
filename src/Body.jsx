import React from 'react'
import Home from './Home'
import About from './About'
import Text from './Text'
import TableSample from './TableSample'
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