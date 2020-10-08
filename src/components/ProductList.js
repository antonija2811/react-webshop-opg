import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';
import PovrceRender from './PovrceRender';
import VoceRender from './VoceRender';

class ProductList extends Component {
    render() {
        return (
            <div className="py-5">
                <div className="container">
                    <Title title="Voće"/>   
                    <VoceRender/>
                    <Title title="Povrće"/>
                    <PovrceRender/>
                </div>
                
            </div>
            
        );
    }
}

export default ProductList;