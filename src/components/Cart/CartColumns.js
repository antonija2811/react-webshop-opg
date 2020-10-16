import React, { Component } from 'react';

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block mt-4">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">proizvod</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">naziv</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">cijena</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">količina</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">ukloni</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">ukupno</p>
                </div>
            </div>
        </div>
    );
}

