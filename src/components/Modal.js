import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen,closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if(!modalOpen) {
                        return null
                    }
                    else {
                        return (<ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-6 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <img src={img} alt="product" className="img-fluid"/>
                                        <h5 className="pt-5">{title}</h5>
                                        <p className="text-capitalize font-wight-bold mt-3 mb-5">
                                            <strong>Cijena: {price} <span>kn</span></strong>
                                        </p>
                                        {/*Buttons*/}
                                        <Link to='/ProductList'>
                                            <ButtonContainer onClick={()=>closeModal()}>
                                                Store
                                            </ButtonContainer>
                                        </Link>
                                        <Link to ='/Cart'>
                                            <ButtonContainer cart onClick={()=>closeModal()}>
                                                Go to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`


export default Modal;