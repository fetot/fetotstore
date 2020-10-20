import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Sneakers, Loafers, Formal, Boots } from '../assets/images';
import '../styles/ShoeType.css';

class ShoeType extends React.Component {
    render() {
        return (
            <Container className="stype my-5">
                <h4>Jelajahi ALShop</h4>
                <p className="text-muted">Cari sepatu yang cocok untuk kamu sekarang juga!</p>
                <hr />
                <CardDeck>
                    <Card className="border-0 shadow stlink" as={Link}>
                        <Card.Img variant="top" src={Sneakers} />
                        <Card.Body>
                            <Card.Title className="text-center mb-0">Sepatu Sneakers</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="border-0 shadow stlink" as={Link}>
                        <Card.Img variant="top" src={Loafers} />
                        <Card.Body>
                            <Card.Title className="text-center mb-0">Sepatu Loafers</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="border-0 shadow stlink" as={Link}>
                        <Card.Img variant="top" src={Formal} />
                        <Card.Body>
                            <Card.Title className="text-center mb-0">Sepatu Formal</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="border-0 shadow stlink" as={Link}>
                        <Card.Img variant="top" src={Boots} />
                        <Card.Body>
                            <Card.Title className="text-center mb-0">Sepatu Boots</Card.Title>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        );
    }
}

export default ShoeType;
