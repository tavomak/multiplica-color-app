import React from 'react';
import FetchComponent from './data/fetch-component/';
import Header from './components/Header';
import ButtoNextPrev from './components/ButtonNexPrev'
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
      <div className="row d-md-none">
        <div className="col-12 py-5 text-center">
          <ButtoNextPrev/>
        </div>
      </div>
    </main>
  );
}

export default App;
