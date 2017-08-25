import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
// IMPORT REACT ROUTER <<<<<<<<<<<<<<<<<<<<<<
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// IMPORT COMPONENTS <<<<<<<<<<<<<<<<<<<<<<
import BaseLayout from './components/Layout';
import Explorer from './components/Explorer';
import Films from './components/Films';
import People from './components/People';
import Starships from './components/Starships';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/films' component={Films} />
        <Route path='/people' component={People} />
        <Route path='/starships' component={Starships} />
        <Route path='/' component={Explorer} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
