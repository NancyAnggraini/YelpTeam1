import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from 'react-redux';
import store from './Store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Containers/Home';
import Contact from './Containers/Contact';
import About from './Containers/About';
import Restaurant from './Containers/Restaurant';
import Navbar from './Containers/Navbar';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
  <Provider store={store}>
    <Router>
      <Switch>
        <Navbar>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/restaurant/:restaurant_id" component={Restaurant} />
        </Navbar>
      </Switch>
    </Router>
  </Provider>
</MuiThemeProvider>, document.getElementById('root'));

registerServiceWorker();
