import React, { Component } from 'react';

class EmptyCart extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h2>your card is empty</h2>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default EmptyCart;