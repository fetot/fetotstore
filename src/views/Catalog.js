import React from 'react';
import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import { Sample } from '../assets/images';
import NumberFormat from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../components/Icons'
import { Link } from "react-router-dom";
import '../styles/ShoeCatalog.css';

class Catalog extends React.Component {
    constructor(props) {
        super();
        this.state = {
            products: []
        }
    }

    HandleWishlistButton() {
        
    }

    render() {
        return (
            <div className="content">
                <div className="my-5">
                    <Container className="catalogC">
                        <Row>
                            <Col md={3} className="border p-3 h-100">
                                <h4>FILTER</h4>
                                <hr />
                            </Col>
                            <Col md={9}>
                                <Carousel>
                                    <Carousel.Item>
                                        <img src={Sample} className="d-block w-100" alt="Sample 1" />
                                        <Carousel.Caption>
                                            <h3>ALShop Sample</h3>
                                            <p>ALShop Sample</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={Sample} className="d-block w-100" alt="Sample 2" />
                                        <Carousel.Caption>
                                            <h3>ALShop Sample</h3>
                                            <p>ALShop Sample</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                                {/* Catalog */}
                                <Row>
                                    {this.filterByCategory().map((item) => (
                                        <Col md={4} key={item.id}>
                                            <Card className="border-0 mt-5 cataloghover" as={Link} to={`/product/${item.id}`}>
                                                <Card.Img variant="top" src={item.image} alt={item.name} />
                                                <Card.Body>
                                                    <Card.Title>{item.brand}</Card.Title>
                                                    <hr />
                                                    <Card.Text className="text-muted">{item.name}</Card.Text>
                                                    <Row>
                                                        <Col md="12" className="d-flex">
                                                            <NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'Rp'} renderText={value => <div className="h4 ml-auto">{value}</div>} />
                                                        </Col>
                                                        <Col md="12" className="d-flex flex-row">
                                                            <Button variant="primary" className="w-100 mt-4 btn-lg mr-1">Beli</Button>
                                                            <Button variant="outline-danger btn-lg mt-4 ml-1">
                                                                <FontAwesomeIcon icon={Icons.HeartOut} />
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Catalog;
