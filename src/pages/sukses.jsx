import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { numberWithCommas } from '../utils/number';
import { ListGroup } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge' 
import jsPDF from 'jspdf-autotable'

export default class Sukses extends Component {
  generatePDF = async () => {
    const {  } = await import('jspdf');
    const { keranjangs } = this.props;
    const doc = new jsPDF();

    // Tambahkan judul
    doc.text("Struk Pembayaran", 10, 10);

    // Tambahkan tabel barang
    const tableColumn = ["Nama Barang", "Harga", "Jumlah", "Total Harga"];
    const tableRows = [];

    keranjangs.forEach(item => {
      const itemData = [
        item.nama_barang,
        `Rp. ${numberWithCommas(item.harga)}`,
        item.jumlah,
        `Rp. ${numberWithCommas(item.total_harga)}`
      ];
      tableRows.push(itemData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    // Tambahkan total harga
    const totalHarga = keranjangs.reduce((result, item) => result + item.total_harga, 0);
    doc.text(`Total Harga: Rp. ${numberWithCommas(totalHarga)}`, 10, doc.autoTable.previous.finalY + 10);

    // Simpan PDF
    doc.save("struk_pembayaran.pdf");
  }

  render() {
    const { keranjangs } = this.props;
    const totalHarga = keranjangs && keranjangs.reduce((result, item) => result + item.total_harga, 0);

    return (
      <div className="mt-4 text-center">
        <h2>Struk Pembayaran</h2>
        <Col>
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
      </Col>
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h4>Total Harga : <strong className="float-right mr-2"> Rp. {totalHarga && numberWithCommas(totalHarga)}</strong></h4>
          </Col>
        </Row>
        <Button onClick={this.generatePDF} className="mt-4">Download PDF</Button>
      </div>
    );
  }
}
