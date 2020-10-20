import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { AmericanExpress,
    BCA, BNI, BRI, JCB, Mandiri, MasterCard,
    Visa, Logo, JNE, LionParcel,
    PosIndonesia, Gojek } from '../assets/images';
import { AppleStore, PlayStore } from '../assets/images';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Icons from './Icons';
import '../styles/AppFooter.css';

class AppFooter extends React.Component {
    render() {
        return (
            <footer>
                <Container fluid="true">
                    <Row style={{backgroundColor: "#F5F5F5"}}>
                        <Container className="py-2">
                            <Row>
                                <Col md={3} className="mb-4">
                                    <h6 className="font-weight-bold my-4">PERUSAHAAN</h6>
                                    <Image src={Logo} width="100" className="my-2" />
                                </Col>
                                <Col md={3} className="mb-4">
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
                                <Col md={3} className="mb-4">
                                    <h6 className="font-weight-bold my-4">JASA PENGIRIMAN</h6>
                                    <Row className="rowftter">
                                        <Col className="my-2">
                                            <img src={JNE} className="mr-2" alt="JNE" />
                                            <img src={LionParcel} className="ml-2" alt="LionParcel" />
                                        </Col>
                                        <div className="w-100"></div>
                                        <Col className="my-2">
                                            <img src={PosIndonesia} className="mr-2" alt="PosIndonesia" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={3} className="mb-4">
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
                                    </Row>
                                </Col>
                        </Row>
                        </Container>
                    </Row>
                    <Row style={{backgroundColor: "#EBEAEB  "}}>
                        <Container className="py-2 SecondFooter">
                            <Row>
                                <Col md={4}>
                                    <h3 className="font-weight-bold my-4">ALShop</h3>
                                    <p><span className="font-weight-bold">ALShop</span> adalah tempat dimana kalian bisa beli sepatu dengan brand yang terkenal. Kami menjadikan Anda sebagai pusatnya.</p>
                                </Col>
                                <Col md={4}>
                                    <h6 className="font-weight-bold my-4">LAYANAN</h6>
                                    <p className="mb-1">Bantuan</p>
                                    <p className="mb-1">Indeks Produk</p>
                                    <p className="mb-1">Promo Partner Kami</p>
                                    <p className="mb-1">Konfirmasi Transfer</p>
                                    <p className="mb-1">Hubungi Kami</p>
                                    <p className="mb-1">Pengembalian Ongkir</p>
                                    <p className="mb-1">Status Order</p>
                                </Col>
                                <Col md={4}>
                                    <h6 className="font-weight-bold my-4">TENTANG KAMI</h6>
                                    <p className="mb-1">About Us</p>
                                    <p className="mb-1">Pers/Media</p>
                                    <p className="mb-1">Persyaratan & Ketentuan</p>
                                    <p className="mb-1">Kebijakan Privasi</p>
                                    <p className="mb-1">THREAD dari ALShop</p>
                                </Col>
                                <Col md={4}>
                                    <h6 className="font-weight-bold my-4">TEMUKAN KAMI</h6>
                                    <Row>
                                        <Col>
                                            <span style={{fontSize: "1.75rem"}}>
                                            <FontAwesomeIcon icon={Icons.Facebook} className="mr-2" />
                                            <FontAwesomeIcon icon={Icons.Instagram} className="mx-2" />
                                            <FontAwesomeIcon icon={Icons.Twitter} className="mx-2" />
                                            <FontAwesomeIcon icon={Icons.Pinterest} className="mx-2" />
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
                                    <p style={{textAlign: "right"}} className="my-4">&copy; 2019 ALShop. All rights reserved.</p>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default AppFooter;