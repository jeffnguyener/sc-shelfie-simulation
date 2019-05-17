import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Products from './components/Product/Product';

import './App.css';


function App() {
  return (
    <div className="App">
      <Dashboard />
      <Form />
      <Header />
      <Products />
    </div>
  );
}

export default App;
