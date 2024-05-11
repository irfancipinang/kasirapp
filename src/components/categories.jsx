import { Component } from 'react'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import { API_URL } from '../utils/constants'
import ListGroup from 'react-bootstrap/ListGroup';


export default class categories extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       categories: []
    }
  }

  componentDidMount() {
    axios
      .get(API_URL+"categories")
      .then(res => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  render() {
    const { categories } = this.state;
    const { changeCategory, categoriYangDipilih} = this.props;
    return (
      <Col> 
        <h5>
          <strong>Daftar kategori</strong>
        </h5>
          <hr  style={{ width: '100%', border: '1px solid black' }}/>
          <ListGroup>
            {categories && categories.map((category) => (
               <ListGroup.Item key={category.id} onClick={() => changeCategory(category.nama)}
               className={categoriYangDipilih === category.nama && "category"}
               style={{cursor: 'pointer'}}
               >
                {category.nama}
               </ListGroup.Item>
            ))}
          </ListGroup>
      </Col>
    )
  }
}
