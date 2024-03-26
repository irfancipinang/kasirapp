import { Component } from 'react'
import Col from 'react-bootstrap/Col'

export default class categories extends Component {
  render() {
    return (
      <Col> 
        <h5>
          <strong>Daftar kategori</strong>
        </h5>
          <hr  style={{ width: '100%', border: '1px solid black' }}/>
      </Col>
    )
  }
}
