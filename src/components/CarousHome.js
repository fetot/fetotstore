import React from 'react';
import {Image, Carousel} from "react-bootstrap";
import {CarousIMG1, CarousIMG2, CarousIMG3, CarousIMG4, CarousIMG5 } from '../assets/images';

class CarousHome extends React.Component {
    render() {
        return (
                    <Carousel className="d-flex mb-0">
                        <Carousel.Item>
                            <a href="/product/mi10t"><Image src={CarousIMG1} className="d-block w-100" /></a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="/product/narzo20pro"><Image src={CarousIMG2} className="d-block w-100" /></a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="/product/pocox3nfc"><Image src={CarousIMG3} className="d-block w-100" /></a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="/iphone12pro"><Image src={CarousIMG4} className="d-block w-100" /></a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="/redmi9c"><Image src={CarousIMG5} className="d-block w-100" /></a>
                        </Carousel.Item>
                        </Carousel>
        );
    }
}

export default CarousHome;