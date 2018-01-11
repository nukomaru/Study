import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  BrowserRouter as Router
} from 'react-router-dom'
injectTapEventPlugin();

ReactDOM.render(
  <div>
    <Router>
      <App />
    </Router>
  </div>
  ,
  document.getElementById('root')
)
