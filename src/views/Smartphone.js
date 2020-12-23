import React from 'react';
import { Catalog } from '../components';

class Smartphone extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="my-5">
                    <Catalog category="female" />
                </div>
            </div>
        );
    }
}

export default Smartphone;