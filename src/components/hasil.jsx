import  { Component } from 'react'
import  Col from 'react-bootstrap/Col'
import { ListGroup } from 'react-bootstrap'

export default class hasil extends Component {
  render() {
    const { keranjangs } = this.props
    return (
      <Col>
      <h5>
        <strong>Hasil</strong>
      </h5>
      <hr  style={{ width: '100%', border: '1px solid black' }}/>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
      </ListGroup>
      </Col>
    )
  }
}

