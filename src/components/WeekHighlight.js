import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Pria, Wanita } from '../assets/images';
import '../styles/WeekHighlight.css';

class WeekHighlight extends React.Component {
    render() {
        return (
            <Container className="highlight my-5">
                <h4>Sorotan Minggu Ini</h4>
                <p className="text-muted">Dapatkan deal yang terbaik dari aplikasi kami!</p>
                <hr />
                <Row>
                    <Col md={6}>
                        <Card className="border-0 shadow">
                            <Card.Img src={Pria}></Card.Img>
                            <Card.ImgOverlay>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="border-0 shadow">
                            <Card.Img src={Wanita}></Card.Img>
                            <Card.ImgOverlay>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default WeekHighlight;
