import React, { Component } from 'react';
import { CarouselPrewed } from '../../components';

class Prewedding extends Component {
  constructor() {
    super();
    this.state = {
      isActiveIndex: 0
    };
  }
  render() {
    return (
      <section id="prewedding" className="container-prewedding">
        <CarouselPrewed/>
      </section>
    );
  }
}

export default Prewedding;