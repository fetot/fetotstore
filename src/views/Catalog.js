import React from 'react';
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../components/Icons'
import { Link } from "react-router-dom";
import '../styles/Catalog.css';
import CarousHome from '../components/CarousHome';

class Catalog extends React.Component {
    constructor() {
        super();
        this.state = {
            data_products : []
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id

        fetch(`http://localhost:3001/catalog/${id}`)
        .then(response => response.json())
        .then(res=>{
            this.setState({
                data_products : res
            })
        })
        .catch(err =>{
            console.error(err)
        })

    }
    

    HandleWishlistButton() {
        
    }

    render() {
        return (
            <div className="content">
                <div className="my-5">
                    <Container className="catalogC">
                        <Row>
                            <Col md={3} className="border-0 shadow p-3 h-100">
                                <h5>FILTER</h5>
                                <hr />
                            </Col>
                            <Col md={9}>
                                <CarousHome className="border-0 shadow"></CarousHome>
                                {/* Catalog */}
                                <Row>
                                    {
                                    this.state.data_products.map((item, index) => (
                                        <Col md={4} key={index}>
                                            <Card className="border-0 shadow mt-5 cataloghover" as={Link} to={`/product/${item.kodeproduk}`}>
                                                <Card.Img variant="top" className="w-100 pt-5 pl-5 pr-5" src={item.thumbnail} alt={item.nama} />
                                                <Card.Body>
                                                    <hr />
                                                    <Card.Title>{item.brand_nama} {item.nama}</Card.Title>
                                                    <Card.Text className="text-muted">{item.ram}/{item.internal} - {item.warna}</Card.Text>
                                                    <Row>
                                                        <Col md="12" className="d-flex">
                                                            <NumberFormat value={item.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <div className="h4 text-warning">{value}</div>} />
                                                        </Col>
                                                        <Col md="1" className="offset-md-9 d-flex flex-row">
                                                            <Button variant="outline-danger btn-sm">
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

export default withRouter(Catalog);
