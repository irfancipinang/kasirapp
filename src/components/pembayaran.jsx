import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { numberWithCommas } from '../utils/number';
import { Link } from 'react-router-dom';

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
            <Button className="text-center" variant="primary w-100 fs-6 mb-2" size="lg" type="BAYAR" as={Link} to={'/sukses'}> BAYAR </Button>
          </Col>
        </Row>
        
      </div>
    )
  }
}
