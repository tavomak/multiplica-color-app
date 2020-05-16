import React, { Component } from 'react';
import ColorCard from './color-card'

class FetchComponent extends Component {
  //const GlobalStylesColors = Object.values(dat);
  state = { dat: {}, GlobalStylesColors: {} }
  
  componentDidMount() {
    fetch('https://reqres.in/api/colors?page=2')
    .then(res => res.json())
    .then(data => {
      const dat  = data.data;
      this.setState({ dat });
      
      const globalColor = Object.values(dat);

      const c = globalColor.map((k,v) => {
        return k.color
      })

      this.setState({ GlobalStylesColors : c });

    })
  }
  
  render() {
    return (
      <ColorCard dat={this.state.dat} />
    )
  }

}

export default FetchComponent