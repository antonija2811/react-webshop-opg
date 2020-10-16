import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, title, img, price, info, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center my-5">
                                    <h2>{title}</h2>
                                </div>
                            </div>
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                {/*Product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <p className="text-capitalize font-wight-bold mt-3 mb-5">
                                        Info about product: {info}
                                    </p>
                                    <h4 className="text-blue">
                                        <strong>
                                            Cijena: {price} <span>kn</span>
                                        </strong>
                                    </h4>
                                    {/*Buttons */}
                                    <Link to='/ProductList'>
                                        <ButtonContainer>
                                            Back to products
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer cart
                                    disabled={inCart?true:false} onClick={()=>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                        {inCart ? "inCart" : "add to cart"}
                                    </ButtonContainer>
                                </div>

                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;