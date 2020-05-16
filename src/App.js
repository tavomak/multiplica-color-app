import React from 'react';
import FetchComponent from './data/fetch-component.js';
import Modal from './components/modal.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


function App() {
  
  return (
    <main className="container">
      <div className="row">
        <div className="col-6">
          <h1>React App </h1>
          <FetchComponent />
          <Modal />
        </div>
      </div>
    </main>
  );
}

export default App;
