import React from 'react';
import FetchComponent from './data/fetch-component/';
import Header from './components/Header';
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
      </div>
    </main>
  );
}

export default App;
