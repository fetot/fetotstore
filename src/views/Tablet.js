import React from 'react';
import { Catalog } from '../components';

class Tablet extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="my-5">
                    <Catalog category="male" />
                </div>
            </div>
        );
    }
}

export default Tablet;