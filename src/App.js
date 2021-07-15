import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bio from './pages/bio';
import Work from './pages/work';
import ContactForm from './pages/contactForm';
import Resume from './pages/resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


import './App.css';

library.add(fab);

export default function App() {
  return (
    <Router>
      <div className ="sec-div">
        <Header />
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={Bio} />
          <Route path={process.env.PUBLIC_URL + '/work'} component={Work} />
          <Route path={process.env.PUBLIC_URL + '/contact'} component={ContactForm} />
          <Route path={process.env.PUBLIC_URL + '/resume'} component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

  

