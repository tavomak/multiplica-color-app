import React from 'react';
import logo from '../../assets/img/multiplica-logo.png';
import ButtoNextPrev from '../ButtonNexPrev'


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
        <li className="ml-auto">
          <ButtoNextPrev/>
        </li>
      </ul>
    </div>
  )
}

export default HeaderComponent;