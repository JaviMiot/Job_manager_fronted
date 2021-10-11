import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Layout from '../components/Layout';
import AddJob from '../components/AddJob'
import JobInfo from '../components/JobInfo';
import '../static/styles/main.css'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/addjob' component={AddJob} />
          <Route exact path='/job/:id' component={JobInfo} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
