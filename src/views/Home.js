import React from 'react';
import { CarousHome, ShoeType, WeekHighlight } from '../components';

class Home extends React.Component {
    render() {
        return (
            <div className="content">
            <CarousHome />  
                <div className="my-5">
                    <p>testes</p>
                    <ShoeType />
                    <WeekHighlight />
                </div>
            </div>
        );
    }
}

export default Home;