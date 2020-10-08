import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.png";
import '.././App.css';
import {ButtonContainer} from './Button'
import styled from 'styled-components';


class NavBar extends Component {
    render() {
        return (
            <NavCss className="navbar navbar-expand-sm navbar-light px-sm-5">
                <Link to='./'>
                    <img src={logo} alt="opg" className="navbar-brand" style={{borderRadius:'1.9rem',height:'4rem'}}/>
                </Link>
                <Link to='/ProductList' style={{textDecoration: 'none'}}>
                    <h5 className="text-title" style={{marginLeft:'3rem'}}>PROIZVODI</h5>
                </Link>
                <Link to='./Contact' style={{textDecoration: 'none'}}>
                    <h5 className="text-title" style={{marginLeft: '2rem'}}>KONTAKT</h5>
                </Link>
                <Link to='./Cart' className="ml-auto navbar-btn">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"/>   
                        </span>
                        
                        Moja košarica
                    </ButtonContainer>
                </Link>
            </NavCss>
        );
    }
}

const NavCss = styled.nav `
    background-color: var(--mainGreen);
    

`


export default NavBar;