import React, { Component } from 'react';
import ColorCard from './color-card'

class FetchComponent extends Component {
  state = {
      currentPage: '',
      dat: {},
      isLoading: false,
    }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(`https://reqres.in/api/colors/${this.state.currentPage}`)
      .then(res => res.json())
      .then(data => {
        const dat = data.data;
        this.setState({ dat });
        this.setState({ isLoading: false });
      })
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <>
        <ColorCard dat={this.state.dat} url={this.state.currentPage} />
      </>
    )
  }

}

export default FetchComponent