import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Image, Table, Tabs, Tab } from "react-bootstrap";
import NumberFormat from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../components/Icons';
import { Apple, Huawei, Oppo,
    Realme, Samsung, Vivo, Xiaomi } from '../assets/images';

function Product() {

    let { id } = useParams();
        
        const [product, setProduct] = useState({})
        
        useEffect(() => {
            fetch(`http://localhost:3001/product/${id}`)
            .then(response => response.json())
            .then(response => setProduct(response))
        }, [])

        var logobrand;
        switch (product.brand_nama) {
            case "Apple":
              logobrand = <img src={Apple} className="mr-2 mb-1" style={{width: "10%"}} alt="Apple" />
              break;
            case "Huawei":
                logobrand = <img src={Huawei} className="mr-2 mb-1" style={{width: "10%"}} alt="Huawei" />
              break;
            case "Oppo":
                logobrand = <img src={Oppo} className="mr-2 mb-1" style={{width: "10%"}} alt="Oppo" />
              break;
            case "Realme":
                logobrand = <img src={Realme} className="mr-2 mb-1" style={{width: "10%"}} alt="Realme" />
              break;
            case "Samsung":
                logobrand = <img src={Samsung} className="mr-2 mb-1" style={{width: "10%"}} alt="Samsung" />
              break;
            case "Vivo":
                logobrand = <img src={Vivo} className="mr-2 mb-1" style={{width: "10%"}} alt="Vivo" />
              break;
            default:
                logobrand = <img src={Xiaomi} className="mr-2 mb-1" style={{width: "10%"}} alt="Xiaomi" />
          }
        
        return (
            <div className="content">
                <div className="my-5">
                    <Container>
                        <Row className="mb-4">
                            <Col md={3} className="border-0 shadow p-4 mr-4 ml-3">
                                <Image src={product.thumbnail} className="w-100 mt-3"></Image>
                            </Col>
                            <Col md={5} className="d-flex flex-column border-0 shadow p-4">
                                <h3 className="font-weight-bold text-muted">{logobrand}{product.brand_nama}</h3>
                                <h3 className="font-weight-bold text-dark">{product.nama}</h3>
                                <h4 className="font-weight-bold text-dark">{product.ram}/{product.internal} - {product.warna}</h4>
                                <p className="mt-4">{product.deskripsi}</p>
                            </Col>
                            <Col md={3} className="d-flex flex-column ml-4">
                                <Row className="p-4 mb-4 border-0 shadow justify-content-center">
                                    <NumberFormat value={product.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <div className="h4 font-weight-bold text-warning">{value}</div>} />
                                    <div className="bottompay mt-auto">
                                        <p className="font-weight-bold text-danger">{product.jumlah}</p>
                                            <Row>
                                                <Col md={12} className="d-flex flex-row">
                                                    <Button variant="warning" className="btn w-100 mr-2"><FontAwesomeIcon icon={Icons.CartPlus} /> MASUKKAN KERANJANG</Button>
                                                    <Button variant="outline-danger" className="btn-lg ml-2">
                                                        <FontAwesomeIcon icon={Icons.Heart} />
                                                    </Button>
                                                </Col>
                                            </Row>
                                    </div>
                                </Row>
                                <Row className="p-4 border-0 shadow">
                                    <p>SIMULASI CICILAN 0%</p>
                                    <Table responsive borderless className="m-0 text-dark small">
                                        <tr>
                                            <th>3 Bulan</th>
                                            <td><NumberFormat decimalScale={0} value={(product.harga) / 3} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /> /bulan</td>
                                        </tr>
                                        <tr>
                                            <th>6 Bulan</th>
                                            <td><NumberFormat decimalScale={0} value={(product.harga) / 6} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /> /bulan</td>
                                        </tr>
                                        <tr>
                                            <th>12 Bulan</th>
                                            <td><NumberFormat decimalScale={0} value={(product.harga) / 12} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /> /bulan</td>
                                        </tr>
                                    </Table>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="d-flex flex-column border-0 shadow p-4">
                                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                    <Tab eventKey="specs" tabClassName="text-secondary" title="Spesifikasi">
                                        
                                    </Tab>
                                    <Tab eventKey="garansi" tabClassName="text-secondary" title="Garansi">
                                        
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }


export default Product;