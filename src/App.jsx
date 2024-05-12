import './index.css'
import { Row, Col, Container } from 'react-bootstrap'
import { Hasil, Categories, Menus, NavbarComponent } from './components'
import React, { Component } from 'react'
import { API_URL } from './utils/constants'
import axios from 'axios' 
import swal from 'sweetalert'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menus: [],
       categoriYangDipilih: "Makanan",
       keranjang: [],
    }
  }

  componentDidMount() {
    axios
      .get(API_URL+"products?category.nama="+this.state.categoriYangDipilih)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error);
      })

      axios
      .get(API_URL+"keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch(error => {
        console.log(error);
      })
  }

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      menus: [],
    })

    axios
    .get(API_URL+"products?category.nama="+value)
    .then((res) => {
      const menus = res.data;
      this.setState({ menus });
    })
    .catch(error => {
      console.log(error);
    })
  }

  masukKeranjang = (value) => {

    axios
    .get(API_URL+"keranjangs?product.id=" + value.id)
    .then((res) => {
      if(res.data.length === 0 ) {

        const keranjang = {
          jumlah: 1,
          total_harga: value.harga,
          product: value, 
        }
  
      axios
      .get(API_URL + "keranjangs", keranjang )
      .then((res) => {
        swal({
          title: "Sukses",
          text: "Sukses Masuk Keranjang " +keranjang.product.nama,
          icon: "success",
          button: false,
          timer: 2000,
        })
      })
    
      .catch(error => {
        console.log(error);
        })
      }else {

        const keranjang = {
          jumlah: res.data[0].jumlah+1,
          total_harga: res.data[0].total_harga + value.harga,
          product: value
        }
      
        axios
      .put(API_URL+"keranjangs/" + res.data[0].id, keranjang )
      .then((res) => {
        swal({
          title: "Sukses",
          text: "Sukses Masuk Keranjang " +keranjang.product.nama,
          icon: "success",
          button: false,
          timer: 2000,
        })
      })
      .catch(error => {
        console.log(error);
        })

      }
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  render() {
    const { menus, categoriYangDipilih, keranjangs } = this.state
    
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
                  masukKeranjang={this.masukKeranjang}
               />
              ))}
            </Row>
            </Col>
            <Hasil keranjangs={ keranjangs }/>
          </Row>
          </Container>
        </div>
    </div>
    )
  }
}

