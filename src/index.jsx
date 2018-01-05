import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <div>
    <App />
  </div>
  ,
  document.getElementById('root')
)
