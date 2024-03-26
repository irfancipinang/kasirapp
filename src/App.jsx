import './index.css'
import { Row, Col, Container } from 'react-bootstrap'
import Hasil  from './components/hasil'
import NavbarComponent from'./components/navbar'
import Categories from'./components/categories'

function App() {
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

export default App
