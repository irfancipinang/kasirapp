import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { numberWithCommas } from '../utils/number';

export default class Pembayaran extends Component {
  render() {
    const Pembayaran = this.props.keranjang.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
      <div className="fixed-bottom">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-2">
          <h4>Total Harga : Rp. {numberWithCommas(Pembayaran)}</h4>
          </Col>
        </Row>
      </div>
    )
  }
}
