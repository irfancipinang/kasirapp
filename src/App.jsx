import './index.css'
import { Row, Col, Container } from 'react-bootstrap'
import Hasil  from './components/hasil'
import NavbarComponent from'./components/navbar'
import Categories from'./components/categories'
import React, { Component } from 'react'
import { API_URL } from './utils/constants'
import axios from 'axios' 

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menus: [],

    }
  }

  componentDidMount() {
    axios
      .get(API_URL+"products")
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  render() {
    console.log(this.state.menus)
    return (
      <div className='App'>
        <NavbarComponent/>
        <div className='mt-2'>
          <Container fluid>
          <Row>
            <Categories/>
            <Col md={6}>
            <h5>
              <strong>Daftar Produk</strong>
            </h5>
            <hr  style={{ width: '100%', border: '1px solid black' }}/>
            </Col>
            <Hasil/>
          </Row>
          </Container>
        </div>
    </div>
    )
  }
}

