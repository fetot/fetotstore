import React from 'react';
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { Apple, Huawei, Oppo,
    Realme, Samsung, Vivo, Xiaomi } from '../assets/images';

class Brands extends React.Component {
    render() {
        return(
            <div className="content">
                <div className="my-5">
                    <Container>
                        <h3>Brands</h3>
                        <Card className="w-100 rounded-0 p-5">
                                <Row className="mb-4 justify-content-md-center">
                                    <Col md={2} className="d-flex align-items-center">
                                        <a href="/brands/Apple" className="text-center"><img src={Apple} className="mt-2 w-50" alt="Apple" /></a>
                                    </Col>
                                    <Col md={3} className="d-flex offset-md-1 align-items-center">
                                        <a href="/brands/Huawei" className="text-center"><img src={Huawei} className="mt-4 w-50" alt="Huawei" /></a>
                                    </Col>
                                    <Col md={3} className="d-flex align-items-center">
                                        <a href="/brands/Oppo" className="text-center"><img src={Oppo} className="mt-5 w-50" alt="Oppo" /></a>
                                    </Col>
                                    <Col md={3} className="d-flex align-items-center">
                                        <a href="/brands/Samsung" className="text-center"><img src={Samsung} className="mt-5 w-50" alt="Samsung" /></a>
                                    </Col>
                                </Row>
                                <Row className="mt-4 justify-content-md-center">
                                    <Col md={2} className="d-flex align-items-center">
                                        <a href="/brands/Realme" className="text-center"><img src={Realme} className="w-100" alt="Realme" /></a>
                                    </Col>
                                    <Col md={2} className="d-flex offset-md-1 align-items-center">
                                        <a href="/brands/Vivo" className="text-center"><img src={Vivo} className="w-100" alt="Vivo" /></a>
                                    </Col>
                                    <Col md={3} className="d-flex offset-md-1 align-items-center">
                                        <a href="/brands/Xiaomi" className="text-center"><img src={Xiaomi} className="w-50" alt="Xiaomi" /></a>
                                    </Col>
                                    <Col md={3} className="d-flex align-items-center">
                                        
                                    </Col>
                                </Row>
                            </Card>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Brands;