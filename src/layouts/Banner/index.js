import React, { Component } from 'react';
import BannerImage from '../../assets/images/banner.jpeg';

class Banner extends Component {
  render() {
    return (
      <section id="banner" className="container-banner">
        <img src={BannerImage} alt="Banner Wedding"/>
        <div className="content-banner">
          <div className="content-title">
            Ani &amp; Andi Wedding
          </div>
          <div className="content-text">January 1st 2021</div>
        </div>
      </section>
    );
  }
}

export default Banner;