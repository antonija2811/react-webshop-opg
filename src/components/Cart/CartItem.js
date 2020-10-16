import React from 'react';
import styled from 'styled-components';

export default function CartItem({item,value}) {
    const {id,title,img,price,total,count} = item;
    const {increment, decrement, removeItem} = value;

    const CartCss = styled.div `
    .btn:hover {
        background-color: var(--mainRed) !important;
        border: 0.1rem solid var(--mainRed) !important;
        border-radius. 0.25rem;
        
    }

    .btn {
        font-size: 0.6rem !important;
    }

    .cart-icon:hover {
        color: var(--mainRed);
    }
`

    return (
        <CartCss className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img 
                    src={img} 
                    style={{width: '5rem',height: '5rem'}} 
                    className="image-fluid" 
                    alt="product"
                />
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none" >Proizvod:</span> {title}
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Cijena:</span> {price} <span>kn</span>
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>
                            -
                        </span>
                        <span className="mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={()=>increment(id)}>
                            +
                        </span>
                    </div>
                </div>
            </div>
            {/* */}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <i className="fas fa-trash"/>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>{total}<span>kn</span></strong>
            </div>
        </CartCss>
    );


}

