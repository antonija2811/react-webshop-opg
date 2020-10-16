import React, { Component } from 'react';
import Slider from './Slider';
import Title from '../Title';
import image from '../../assets/slika1.jpeg';
import image1 from '../../assets/slika2.jpeg';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center pt-3">
                        <Slider/>
                    </div>
                </div>

                
                <div className="row">
                    <div className="col-12 mx-auto text-center mt-5 mb-2">
                        <Title title={"o nama"}/>
                    </div>   
                </div>

                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={image} className="img-fluid" alt="product"/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 text-center">
                        <p className="text-capitalize font-weight-bold mt-4 mb-4">
                            OPG Sunjic
                        </p>
                        <p className="col-10 mx-auto text-justify">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 mt-5">
                        <p className="col-10 mx-auto text-justify">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={image1} className="img-fluid" alt="product"/>
                    </div>
                </div>   
                
                
                
            </div>
            

            
        );
    }
}

export default Home;