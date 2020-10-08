import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import Product from './Product';

class PovrceRender extends Component {
    render() {
        return (
            <div className="row" style={{paddingBottom: '2rem'}}>
            <ProductConsumer>
                { value => {
                    return value.products.map(product => {
                        if(Number.isInteger(product.id)!==true)
                        {
                            return <Product key={product.id} product={product}/>;
                        }
                    })
                }}
            </ProductConsumer>
        </div>
        );
    }
}

export default PovrceRender;