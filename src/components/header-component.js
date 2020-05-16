import React, { Component } from 'react';
import logo from '../assets/img/multiplica-logo.png';
import next from '../assets/img/siguiente.png';

function Article(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <p><em>Escrito por {props.author}</em></p>
      <date>{props.date}</date>
      <article>
        {props.children}
      </article>
    </section>
  )
}


const HeaderComponent = (props) => {
  return (
    <div className="col-12">
      <ul className="mt-5 mb-5 d-flex align-items-center">
        <li>
          <img src={logo} alt="Multiplica Color App" className="mr-4" />
        </li>
        <li>
          <h2 className="font-weight-bolder mb-1">Multiplica Color App</h2>
          <p>Design and  Development : @tavomak</p>
        </li>
      </ul>
    </div>
  )
}

export default HeaderComponent;