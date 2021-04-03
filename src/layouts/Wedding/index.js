import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText
} from 'reactstrap';

class Wedding extends Component {
  render() {
    return (
      <section id="wedding" className="container-wedding">
        <div className="content-wedding">
          <div className="content-name">Ani Surani</div>
          <div className="content-parents">Putri ke-2 dari Bapak Budi dan Ibu Siti</div>
          <div className="content-and">&amp;</div>
          <div className="content-name">Andi Surandi</div>
          <div className="content-parents">Putra ke-3 dari Bapak Bambang dan Ibu Putri</div>
        </div>
        <Row>
          <Col sm={12} md={6}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h3>Akad</h3>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <CardText>
                  <div>Masjid Istiqlal</div>
                  <div>Minggu, 1 Januari 2022</div>
                  <div>Pukul: 09.00 WIB</div>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h3>Resepsi</h3>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <CardText>
                  <div>Gelora Bung Karno</div>
                  <div>Minggu, 1 Januari 2022</div>
                  <div>Pukul: 13.00 WIB</div>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Wedding;