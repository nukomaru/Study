import React from 'react'
import Home from './Home'
import About from './About'
import  Text from './Text'
import {
    Route,
    Switch
} from 'react-router-dom'

const Body = () => (
    <Switch>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/text" component={Text} />
      </div>
    </Switch>
  );

export default Body