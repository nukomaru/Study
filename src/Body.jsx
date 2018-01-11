import React from 'react'
import Home from './Home'
import About from './About'
import {
    Route,
    Switch
} from 'react-router-dom'

const Root = () => (
    <Switch>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Switch>
  );

export default Root