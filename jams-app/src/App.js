import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';

import NavigationBar from './components/layout/NavigationBar';
import Footer from './components/layout/Footer';
import landing, { Landing } from './components/home/Landing';
import store from './store';

class App extends Component {
  render(){
    return (
      <Provider store = {store} >
        <NavigationBar />,
        <Landing />
        <Footer /> 
      </Provider>
      
    );       
  }
}

export default App;
