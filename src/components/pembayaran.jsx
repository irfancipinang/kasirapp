import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
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
          <Col md={{ span: 3, offset: 9}} className="px-4">
            <h4>Total Harga : <strong className="float-right mr-2"> Rp. {pembayaran && numberWithCommas(pembayaran)}</strong></h4>
            <Button variant="primary" block className="mb-2 mt-2 mr-2">
              <strong>BAYAR</strong>
            </Button>
          </Col>
        </Row>
        
      </div>
    )
  }
}
