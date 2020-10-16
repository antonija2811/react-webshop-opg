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
                                <div className="col-10 mx-auto text-center text-uppercase">
                                    <h4>{title}</h4>
                                </div>
                            </div>
                            {/* product info */}
                            <div className="row my-3 align-items-center">
                                <div className="col-10 mx-auto col-md-6 my-3 text-center">
                                    <img src={img} className="img-fluid" alt="product" style={{height:'60%',width: '60%'}}/>
                                </div>
                                {/*Product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize ">
                                    <p className="text-capitalize font-wight-bold mb-5">
                                        <strong>Info: </strong>{info}
                                    </p>
                                    <h5>
                                        <strong>
                                            Cijena: {price} <span>kn</span>
                                        </strong>
                                    </h5>
                                    {/*Buttons */}
                                    <div className="mt-4">
                                        <Link to='/ProductList'>
                                            <ButtonContainer style={{marginLeft:'0'}}>
                                                Natrag
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart
                                            disabled={inCart?true:false} onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            {inCart ? "inCart" : "dodaj u košaricu"}
                                        </ButtonContainer>
                                    </div>

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