import React, { Component } from 'react';

class ColorCard extends Component {

    _renderColors() {
        const { dat } = this.props,
            colors = Object.values(dat);

        //console.log(colors)
        return colors.map((v, i) => (
            <div key={i} className=" col-md-6 col-xl-4 my-4">
                <div className="card shadow">
                    <div
                        className="card-header py-5"
                        style={{ background: v.color }}>
                        <h2
                            className="card--title"
                            style={{ color: v.color }}>
                            {v.name}
                        </h2>
                    </div>
                    <div className="card-body">
                        <ul className="d-flex mb-0">
                            <li className="w-50">
                                <p className="mb-1">
                                    <b>Año: </b>{v.year}
                                </p>
                                <p className="mb-1">
                                    <b>Color: </b>{v.color}
                                </p>
                                <p className="mb-1">
                                    <b>Pantone: </b>{v.pantone_value}
                                </p>
                            </li>
                            <li className="w-50">
                                <ul className="d-flex">
                                    <li>
                                        <span
                                            className="p-7 d-inline-block color--example color--example__darken"
                                            style={{ background: v.color }}>
                                        </span>
                                        <p className="color--example__value"><small>-20</small></p>
                                    </li>
                                    <li>
                                        <span
                                            className="p-7 d-inline-block color--example"
                                            style={{ background: v.color }}>
                                        </span>
                                        <p className="color--example__value"><small>0</small></p>
                                    </li>
                                    <li>
                                        <span
                                            className="p-7 d-inline-block color--example color--example__lighten"
                                            style={{ background: v.color }}>
                                        </span>
                                        <p className="color--example__value"><small>+20</small></p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
        )
    }

    render() {
        return (
            <>
                {this._renderColors()}
            </>
        )
    }

}

export default ColorCard;