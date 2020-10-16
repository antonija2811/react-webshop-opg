import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({value}) {
    const {cartTotal,clearCart} = value;

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <h5 className="mb-3">
                            <span className="text-title">Ukupno:</span>
                            <strong>{cartTotal} kn</strong>
                        </h5>
                        <Link to="/ProductList">
                            <button 
                                className="btn btn-outline-danger text-uppercase text-left mb-3 px-2 mr-2" 
                                type="button"
                                onClick={()=>clearCart()}
                                style={{
                                    fontSize:'0.8rem',

                                }}
                            >
                                očisti košaricu
                            </button>
                        </Link>
                        <button 
                                className="btn btn-success text-uppercase mb-3 px-5" 
                                type="button"
                                onClick={()=>clearCart()}
                                style={{
                                    fontSize:'0.8rem',

                                }}
                            >
                                dovrši narudžbu
                        </button>
                    </div>
                </div>
            </div>  
        </div>
    );
}

