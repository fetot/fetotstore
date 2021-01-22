import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';
import '../styles/NewProducts.css';

class NewProducts extends React.Component {
    constructor() {
        super();
        this.state = {
            data_products : []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3001/`)
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

    render() {
        return (
            <Container className="stype my-5">
                <h4>Produk Terbaru</h4>
                <p className="text-muted">Update gadgetmu dengan Smartphone, Tablet dan Aksesoris terkini!</p>
                <hr />
                <CardDeck>
                {
                                    this.state.data_products.map((item, index) => (
                    <Card className="border-0 shadow stlink" as={Link} to={`/product/${item.kodeproduk}`}>
                        <Card.Img variant="top" className="w-100 p-5" src={item.thumbnail} alt={item.nama} />
                        <Card.Body>
                            <Card.Title className="mb-0">
                                {item.brand_nama} {item.nama}
                            </Card.Title>
                            <div className="mb-0">
                            <Card.Text className="text-muted">{item.ram}/{item.internal} - {item.warna}</Card.Text>
                            <NumberFormat value={item.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <div className="font-weight-bold text-warning">{value}</div>} />
                            </div>           
                        </Card.Body>
                    </Card>
                ))}
                </CardDeck>
            </Container>
        );
    }
}

export default NewProducts;
