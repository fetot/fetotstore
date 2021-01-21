import React from 'react';
import { Card, CardDeck, Container, Badge } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { NewProd1, NewProd2, NewProd3, NewProd4 } from '../assets/images';
import '../styles/NewProducts.css';
import { Apple, Huawei, Oppo,
    Realme, Samsung, Vivo, Xiaomi } from '../assets/images';

class NewProducts extends React.Component {
    render() {
        return (
            <Container className="stype my-5">
                <h4>Produk Terbaru</h4>
                <p className="text-muted">Update gadgetmu dengan Smartphone, Tablet dan Aksesoris terkini!</p>
                <hr />
                <CardDeck>
                    <Card className="border-0 shadow stlink" as={Link} to="/product/mi10tpro">
                        <Card.Img variant="top" src={NewProd1} />
                        <Card.Body>
                            <Card.Title className="mb-0">
                                <img src={Xiaomi} className="mr-2 mb-1" style={{width: "10%"}} alt="Xiaomi" />Mi 10T Pro
                            </Card.Title>
                            Mulai dari<br />
                            <span className="font-weight-bold text-warning">Rp 6.999.000</span>
                        </Card.Body>
                    </Card>
                    <Card className="border-0 shadow stlink" as={Link} to="/product/rmnarzo20pro">
                        <Card.Img variant="top" src={NewProd2} className="img-fluid"/>
                        <Card.Body>
                            <Card.Title className="mb-0"><img src={Realme} className="mr-2 mb-1" style={{width: "25%"}} alt="Realme" />Narzo 20 Pro</Card.Title>
                            Mulai dari<br />
                            <span className="font-weight-bold text-warning">Rp 3.399.000</span>
                        </Card.Body>
                    </Card>
                    <Card className="border-0 shadow stlink" as={Link}>
                        <Card.Img variant="top" src={NewProd3} />
                        <Card.Body>
                            <Card.Title className="mb-0"><img src={Xiaomi} className="mr-2 mb-1" style={{width: "10%"}} alt="Xiaomi" />POCO X3 NFC</Card.Title>
                            Mulai dari<br />
                            <span className="font-weight-bold text-warning">Rp 3.099.000</span>
                        </Card.Body>
                    </Card>
                    <Card className="border-0 shadow stlink" as={Link}>
                        <Card.Img variant="top" src={NewProd4} />
                        <Card.Body>
                            <Card.Title className="mb-0"><img src={Apple} className="mr-2 mb-1" style={{width: "10%"}} alt="Apple" />iPhone 12 Pro</Card.Title>
                            Mulai dari<br />
                            <span className="font-weight-bold text-warning">Rp 18.499.000</span>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        );
    }
}

export default NewProducts;
