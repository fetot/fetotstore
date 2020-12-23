import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import NumberFormat from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../components/Icons';

class Product extends React.Component {
    render() {

    let { id } = useParams();
        
        const [product, setProduct] = useState({})
        
        useEffect(() => {
            fetch(`http://localhost:3001/product/${id}`)
            .then(response => response.json())
            .then(response => setProduct(response))
        }, [])
        
        return (
            <div className="content">
                <div className="my-5">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <Image src={product.image} className="img-thumbnail"></Image>
                            </Col>
                            <Col md={6} className="d-flex flex-column">
                                <h3 className="font-weight-bold text-muted">{product.brand}</h3>
                                <h3 className="font-weight-bold">{product.name}</h3>
                                <NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'Rp'} renderText={value => <div className="h4 font-weight-bold">{value}</div>} />
                                    <div className="bottompay mt-auto">
                                        <p className="font-weight-bold text-danger">Sepatu Tersedia</p>
                                            <Row>
                                                <Col md={12} className="d-flex flex-row">
                                                    <Button variant="primary" className="btn-lg w-100 mr-2">Beli</Button>
                                                    <Button variant="outline-danger" className="btn-lg ml-2">
                                                        <FontAwesomeIcon icon={Icons.Heart} />
                                                    </Button>
                                                </Col>
                                            </Row>
                                    </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Product;