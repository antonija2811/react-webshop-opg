import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;

        return (
                <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 pt-3">
                    <div className="card">
                        <ProductConsumer>
                            {(value) => (
                                <div className="img-container" 
                                    onClick={()=>
                                        value.handleDetail(id)
                                    }
                                
                                >
                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top p-4"/>
                                </Link>
                                <button className="cart-btn mx-1" 
                                    disabled={inCart ? true : false} 
                                    onClick={()=> {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                                >
                                {inCart ? (
                                    <p className="text-capitalize" disabled>in cart</p>
                                ) : (
                                    <i className="fas fa-cart-plus"/>
                                )
                                }
                                </button>
                            </div>
                            )}
                            
                        </ProductConsumer>
                        
                        {/* card footer */}
                        <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center mb-0">{title}</p>
                            <h5 className="font-italic mb-0">
                                {price} 
                                <span className="mr-1">kn</span>
                            </h5>
                        </div>
                    </div>
                </ProductWrapper>
        );

    }
}

const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all 0.1s linear;

    }

    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: all 0.1s linear;
        padding-top: 1rem;
    }

    &:hover {
        .card {
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);

        }
        .card-footer {
            background: rgba(247,247,247);

        }
    }

    .img-container {
        position: relative;
        overflow: hidden;
    }

    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.6rem;
        background: var(--lightGreen);
        border: none;
        border-radius: 0.3rem;
        color: var(--mainWhite);
        font-size: 1.4rem;
        
    }

    .cart-btn:hover {
        color: var(--mainOrange);
        cursor: pointer;
    }

`;

export default Product;