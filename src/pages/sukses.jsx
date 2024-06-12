import React, { Component } from 'react'
import { Row, Col,} from 'react-bootstrap'
import { numberWithCommas } from '../utils/number';

export default class sukses extends Component {
  render() {
    const {keranjangs} = this.props
    const sukses = keranjangs && keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
      <div className="mt-4 text-center ">
        <h2>Struck Pembayaran</h2>
        <Row>
          <Col md={{ span: 3, offset: 9}} className="px-4">
            <h4>Total Harga : <strong className="float-right mr-2"> Rp. {sukses && numberWithCommas(sukses)}</strong></h4>
          </Col>
        </Row>
      </div>
    )
  }
}
