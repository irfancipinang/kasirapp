import  { Component } from 'react'
import Col  from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ListGroup } from 'react-bootstrap'
import { numberWithCommas } from '../utils/number';
import Badge from 'react-bootstrap/Badge' 
import Pembayaran from './pembayaran';

export default class Hasil extends Component {
  render() {
    const { keranjangs } = this.props
    
    // console.log(keranjangs && keranjangs.length);
    
    return (
      <Col>
      <h5>
        <strong>Hasil</strong>
      </h5>
      <hr  style={{ width: '100%', border: '1px solid black' }}/>
      {keranjangs && 
         <ListGroup variant="flush">
           {keranjangs.map((menuKeranjang) =>(
            <ListGroup.Item>
             <Row>
              <Col xs={2}>
              <h4>
                <Badge pill variant="succes">
                    {menuKeranjang.jumlah}
                </Badge>
              </h4>
              </Col>
              <Col>
                 <h5>{menuKeranjang.product.nama}</h5>
                 <p>Rp.{numberWithCommas(menuKeranjang.product.harga)}</p>
              </Col> 
              <Col>
                <strong>Rp. {numberWithCommas(menuKeranjang.total_harga)}</strong>
              </Col>
             </Row>
            </ListGroup.Item>
           ))}
       </ListGroup>
      }
      <Pembayaran keranjangs={keranjangs} />
      </Col>
    );
  }
}

