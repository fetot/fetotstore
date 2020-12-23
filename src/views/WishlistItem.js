import React from 'react';
import { Card, Container, Row, Col, Button } from "react-bootstrap";

class WishlistItem extends React.Component {
    render() {
        return(
            <div className="content">
                <div className="my-5">
                    <Container>
                        <h2 className="mb-4">My Wishlist</h2>
                            <Card className="w-100 rounded-0 p-4">
                                <Row>
                                    <Col md={3}>
                                        <img className="img-fluid" src="https://via.placeholder.com/300" alt="test" />
                                    </Col>
                                    <Col md={3} className="d-flex">
                                        <h5 className="mx-auto my-auto">Nama Sepatu</h5>
                                    </Col>
                                    <Col md={3} className="d-flex">
                                        <h5 className="mx-auto my-auto">Harga</h5>
                                    </Col>
                                    <Col md={3} className="d-flex flex-row">
                                        <div className="mx-auto my-auto d-flex flex-row w-100">
                                        <Button variant="primary" className="w-100 btn-lg mr-1">Add to bag</Button>
                                        <Button variant="outline-danger btn-lg ml-1">X</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <div className="my-4"></div>
                            <Row>
                                <Col md={8}>
                                    <div className="p-3" style={{backgroundColor: "#1A1A21"}}>
                                        <p className="bg-white mb-0 p-2">Total</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="p-3" style={{backgroundColor: "#1A1A21"}}>
                                        <p className="bg-white mb-0 p-2">Harga</p>
                                    </div>
                                </Col>
                            </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default WishlistItem;