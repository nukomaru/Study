import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import {BrowserRouter as Router} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createStore } from 'redux'
import Reducers from './reducers/reducer'
import { Provider } from 'react-redux'

let store = createStore(Reducers)

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </Router>
    </Provider>
  </div>
  ,
  document.getElementById('root')
)
