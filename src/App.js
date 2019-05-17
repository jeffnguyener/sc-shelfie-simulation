import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Products from './components/Product/Product';



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
