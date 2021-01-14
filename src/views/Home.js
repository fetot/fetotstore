import React from 'react';
import { CarousHome, NewProducts, KategoriHome } from '../components';

class Home extends React.Component {
    render() {
        return (
            <div className="content">
            <CarousHome />  
                <div className="my-5">
                    <NewProducts />
                    <KategoriHome />
                </div>
            </div>
        );
    }
}

export default Home;