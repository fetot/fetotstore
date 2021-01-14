import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { AmericanExpress,
    BCA, BNI, BRI, JCB, Mandiri, MasterCard,
    Visa, Logo, JNE, LionParcel,
    PosIndonesia, Gojek, Apple, Huawei, Oppo,
    Realme, Samsung, Vivo, Xiaomi } from '../assets/images';
import { AppleStore, PlayStore } from '../assets/images';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Icons from './Icons';
import '../styles/AppFooter.css';

class AppFooter extends React.Component {
    render() {
        return (
            <footer className="container-fluid mb-0">
                    <Row style={{backgroundColor: "#F5F5F5"}}>
                        <Container className="py-2">
                            <Row>
                                <Col md={3} className="mb-4">
                                    <h6 className="font-weight-bold my-4">PERUSAHAAN</h6>
                                    <Image src={Logo} width="100" className="my-2" />
                                </Col>
                                <Col md={2} className="mb-4">
                                    <h6 className="font-weight-bold my-4">PEMBAYARAN</h6>
                                    <Row className="rowftter">
                                        <Col className="my-2">
                                            <img src={AmericanExpress} className="mr-2" alt="American Express" />
                                            <img src={BCA} className="ml-2" alt="BCA" />
                                        </Col>
                                        <div className="w-100"></div>
                                        <Col className="my-2">
                                            <img src={BNI} className="mr-2" alt="BNI" />
                                            <img src={BRI} className="ml-2" alt="BRI" />
                                        </Col>
                                        <div className="w-100"></div>
                                        <Col className="my-2">
                                            <img src={JCB} className="mr-2" alt="JCB" />
                                            <img src={Mandiri} className="ml-2" alt="Mandiri" />
                                        </Col>
                                        <div className="w-100"></div>
                                        <Col className="my-2">
                                            <img src={MasterCard} className="mr-2" alt="MasterCard" />
                                            <img src={Visa} className="ml-2" alt="Visa" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={2} className="mb-4">
                                    <h6 className="font-weight-bold my-4">JASA PENGIRIMAN</h6>
                                    <Row className="rowftter">
                                        <Col className="my-2">
                                            <img src={JNE} className="mr-2" alt="JNE" />
                                            <img src={LionParcel} className="ml-2" alt="LionParcel" />
                                        </Col>
                                        <div className="w-100"></div>
                                        <Col className="my-2">
                                            <img src={PosIndonesia} className="mr-2" alt="PosIndonesia" />
                                            <img src={Gojek} className="ml-2" alt="Gojek" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={2} className="mb-4">
                                    <h6 className="font-weight-bold my-4">PARTNER KAMI</h6>
                                    <Row className="rowftter">
                                        <Col className="my-2">
                                            <img src={BCA} className="mr-2" alt="BCA_P" />
                                            <img src={Gojek} className="ml-2" alt="Gojek" />
                                        </Col>
                                        <div className="w-100"></div>
                                        <Col className="my-2">
                                            <img src={Mandiri} className="mr-2" alt="Mandiri_P" />
                                            <img src={BNI} className="ml-2" alt="BNI_P" />                                           
                                        </Col>
                                        <div className="w-100"></div>
                                        <Col className="my-2">
                                            <img src={Xiaomi} className="mr-2" alt="Xiaomi" />                                         
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={2} className="mb-4">
                                    <h6 className="font-weight-bold my-4">BRANDS</h6>
                                    <Row className="rowftter">
                                        <Col className="my-2">
                                            <img src={Apple} className="mr-2" alt="Apple" />
                                            <img src={Oppo} className="ml-2" alt="Oppo" />
                                        </Col>
                                        <div className="w-100"></div>
                                        <Col className="my-2">
                                            <img src={Samsung} className="mr-2" alt="Samsung" />
                                            <img src={Xiaomi} className="ml-2" alt="Xiaomi" />
                                        </Col>
                                        <div className="w-100"></div>
                                        <Col className="my-2">
                                            <img src={Huawei} className="mr-2" alt="Huawei" />
                                            <img src={Realme} className="ml-2" alt="Realme" />
                                        </Col>
                                        <div className="w-100"></div>
                                        <Col className="my-2">
                                         <img src={Vivo} className="mr-2" alt="Vivo" />
                                        </Col>

                                    </Row>
                                </Col>
                        </Row>
                        </Container>
                    </Row>
                    <Row style={{backgroundColor: "#EBEAEB  "}}>
                        <Container className="py-2 SecondFooter">
                            <Row>
                                <Col md={4}>
                                    <h3 className="font-weight-bold my-4">FETOT Store</h3>
                                    <p><span className="font-weight-bold">FETOT Store</span> adalah sebuah e-commerce yang menjual produk smartphone, tablet dan aksesoris berbagai brand dengan jaminan original dan bergaransi resmi.</p>
                                </Col>
                                <Col md={4}>
                                    <h6 className="font-weight-bold my-4">LAYANAN</h6>
                                    <p className="mb-1">Bantuan</p>
                                    <p className="mb-1">Garansi</p>
                                    <p className="mb-1">Konfirmasi Transfer</p>
                                    <p className="mb-1">Retur</p>
                                    <p className="mb-1">Status Order</p>
                                </Col>
                                <Col md={4}>
                                    <h6 className="font-weight-bold my-4">TENTANG KAMI</h6>
                                    <p className="mb-1">FETOT Store</p>
                                    <p className="mb-1">Kebijakan Privasi</p>
                                    <p className="mb-1">Hubungi Kami</p>
                                </Col>
                                <Col md={4}>
                                    <h6 className="font-weight-bold my-4">IKUTI KAMI</h6>
                                    <Row>
                                        <Col>
                                            <span style={{fontSize: "1.75rem"}}>
                                            <FontAwesomeIcon icon={Icons.Facebook} className="mr-2" />
                                            <FontAwesomeIcon icon={Icons.Instagram} className="mx-2" />
                                            <FontAwesomeIcon icon={Icons.Twitter} className="mx-2" />
                                            <FontAwesomeIcon icon={Icons.Youtube} className="ml-2" />
                                            </span>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={"auto"}>
                                    <h6 className="font-weight-bold my-4">DOWNLOAD APP KAMI SEKARANG</h6>
                                    <Row className="storerow">
                                        <Col>
                                            <img src={AppleStore} alt="store_apple" className="mr-2"/>
                                            <img src={PlayStore} alt="store_apple" className="ml-2" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={12}>
                                    <p style={{textAlign: "center"}} className="my-4">Hak Cipta &copy; {(new Date().getFullYear())} FETOT Store. Semua Hak Milik</p>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
            </footer>
        )
    }
}

export default AppFooter;