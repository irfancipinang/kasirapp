import './index.css'
import { Row, Col, Container } from 'react-bootstrap'
import { Hasil, Categories, Menus, NavbarComponent } from './components'
import React, { Component } from 'react'
import { API_URL } from './utils/constants'
import axios from 'axios' 

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menus: [],
       categoriYangDipilih: "Makanan"
    }
  }

  componentDidMount() {
    axios
      .get(API_URL+"products?category.nama="+this.state.categoriYangDipilih)
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error);
      })
  }

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      menus: []
    })

    axios
    .get(API_URL+"products?category.nama="+this.state.categoriYangDipilih)
    .then(res => {
      const menus = res.data;
      this.setState({ menus });
    })
    .catch(error => {
      console.log(error);
    })
  }

  
  render() {
    const { menus, categoriYangDipilih } = this.state
    
    return (
      <div className='App'>
        <NavbarComponent/>
        <div className='mt-2'>
          <Container fluid>
          <Row>
            <Categories changeCategory={this.changeCategory} categoriYangDipilih={categoriYangDipilih}/>
            <Col md={6}>
            <h5>
              <strong>Daftar Produk</strong>
            </h5>
            <hr  style={{ width: '100%', border: '1px solid black' }}/>
            <Row>
              {menus && menus.map((menu) => (
               <Menus 
                  key={menu.id}
                  menu={menu}
               />
              ))}
            </Row>
            </Col>
            <Hasil/>
          </Row>
          </Container>
        </div>
    </div>
    )
  }
}

