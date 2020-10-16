import React, { Component } from 'react';

class EmptyCart extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center" style={{color: 'var(--mainRed)'}}>
                        <h4>Vaša košarica je prazna.</h4>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default EmptyCart;