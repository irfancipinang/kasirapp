import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { numberWithCommas } from '../utils/number';

export default class Pembayaran extends Component {
  render() {
    const {keranjangs} = this.props
    const pembayaran = keranjangs && keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
      <div className="fixed-bottom">
        <Row>
          <Col md={{ span: 3, offset: 9}} className="px-2">
            <h1>p</h1>
            <h4>Total Harga : Rp. {pembayaran && numberWithCommas(pembayaran)}</h4>
          </Col>
        </Row>
      </div>
    )
  }
}
