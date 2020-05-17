import React from 'react';
import ModalApp from '../../components/Modal';

const ColorCard = ({ color, year, name, pantone }) => (
    <div className=" col-md-6 col-xl-4 my-4">
        <div className="card shadow">
            <div
                className="card-header py-5"
                style={{ background: color }}>
                <h2
                    className="card--title"
                    style={{ color }}>
                    {name}
                </h2>
            </div>
            <div className="card-body">
                <ul className="d-flex mb-0">
                    <li className="w-50">
                        <p className="mb-1">
                            <b>Año: </b>{year}
                        </p>
                        <p className="mb-1">
                            <b>Color: </b>{color}
                        </p>
                        <p className="mb-1">
                            <b>Pantone: </b>{pantone}
                        </p>
                    </li>
                    <li className="w-50">
                        <ul className="d-flex">
                            <li>
                                <span
                                    className="p-7 d-inline-block color--example color--example__darken"
                                    style={{ background: color }}>
                                </span>
                                <p className="color--example__value"><small>-20</small></p>
                            </li>
                            <li>
                                <span
                                    className="p-7 d-inline-block color--example"
                                    style={{ background: color }}>
                                </span>
                                <p className="color--example__value"><small>0</small></p>
                            </li>
                            <li>
                                <span
                                    className="p-7 d-inline-block color--example color--example__lighten"
                                    style={{ background: color }}>
                                </span>
                                <p className="color--example__value"><small>+20</small></p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="card-footer">
                <ModalApp color={color} year={year} name={name} pantone={pantone} />
            </div>
        </div>
    </div>
)

export default ColorCard;