import React from 'react';
import {Jumbotron, Image} from "react-bootstrap";
import {JumboIMG} from '../assets/images';
import '../styles/JumbotronHome.css';

class JumbotronHome extends React.Component {
    render() {
        return (
            <Jumbotron className="jumbo d-flex mb-0">
                <div className="my-auto">
                    <div className="mb-5">
                        <h1 className="text-center font-weight-bold text-muted">ALShop</h1>
                        <h2 className="text-center font-weight-bold">Selamat datang di toko sepatu kami!</h2>
                    </div>
                    <Image src={JumboIMG} fluid />
                </div>
            </Jumbotron>
        );
    }
}

export default JumbotronHome;