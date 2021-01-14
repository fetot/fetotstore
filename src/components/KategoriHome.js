import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Smartphone, Tablet, Aksesoris } from '../assets/images';
import '../styles/KategoriHome.css';

class KategoriHome extends React.Component {
    render() {
        return (
            <Container className="highlight my-5">
                <h4>Kategori Produk</h4>
                <p className="text-muted"></p>
                <hr />
                <Row className="mb-4">
                    <Col md={6}>
                        <a href="#">
                        <Card className="border-0 shadow">
                            <Card.Img src={Smartphone}></Card.Img>
                            <Card.ImgOverlay>
                            </Card.ImgOverlay>
                        </Card>
                        </a>
                    </Col>
                    <Col md={6}>
                        <a href="#">
                        <Card className="border-0 shadow">
                            <Card.Img src={Tablet}></Card.Img>
                            <Card.ImgOverlay>
                            </Card.ImgOverlay>
                        </Card>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <a href="#">
                        <Card className="border-0 shadow">
                            <Card.Img src={Aksesoris}></Card.Img>
                            <Card.ImgOverlay>
                            </Card.ImgOverlay>
                        </Card>
                        </a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default KategoriHome;
