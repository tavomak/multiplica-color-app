import React from 'react';
import FetchComponent from './data/fetch-component/';
import Modal from './components/modal.js';
import Header from './components/header-component.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


function App() {
  
  return (
    <main className="container">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <FetchComponent/>
        {/*  <Modal /> */}
      </div>
    </main>
  );
}

export default App;
