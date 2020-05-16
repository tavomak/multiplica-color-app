import React, { Component } from 'react';

class FetchComponent extends Component {

  state = { dat: {} }

  componentDidMount() {
    fetch('https://reqres.in/api/colors')
      .then(res => res.json())
      .then(data => {
        const dat  = data.data
        this.setState({ dat })
      })
  }

  _renderColors() {
    const { dat } = this.state;
    const currencies = Object.values(dat);
    console.log(currencies)
    return currencies.map((v, i) => (
      <div key={i}>
        <span className="text-uppercase" style={{
          color: v.color,
          fontWeight: 800
        }}>{v.name}</span>
      </div>
      )
    )

  }

  render() {
    return (
      <>
        <h4>Fetch Result</h4>
        {this._renderColors()}
      </>
    )
  }

}

export default FetchComponent