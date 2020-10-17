import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo2.png";
import '.././App.css';
import styled from 'styled-components';


class NavBar extends Component {
    render() {
        return (
            <NavCss className="navbar navbar-expand-sm navbar-light px-sm-5">
                <Link to='./'>
                    <img src={logo} alt="opg" className="navbar-brand" style={{borderRadius:'1.9rem',height: '6rem'}}/>
                </Link>
                <Link to='/ProductList' style={{textDecoration: 'none'}}>
                    <h5 className="link-title" style={{marginLeft:'3rem'}}>PROIZVODI</h5>
                </Link>
                <Link to='./Contact' style={{textDecoration: 'none'}}>
                    <h5 className="link-title" style={{marginLeft: '2rem'}}>KONTAKT</h5>
                </Link>
                <Link to='./Cart' className="ml-auto navbar-btn">
                    <ButtonCss>
                        <span className="mr-2">
                            <i className="fas fa-shopping-basket"/>   
                        </span>
                        Moja košarica
                    </ButtonCss>
                </Link>
            </NavCss>
        );
    }
}

const NavCss = styled.nav `
    background-color: var(--mainGreen);

    .link-title {
        text-transform: uppercase;
        color: var(--mainDark);
        margin-bottom: 0;
        padding: 0.5rem;
        font-weight: bolder;
        font-size: 1.2rem;
    }

    .link-title:hover {
        color: var(--mainRed);
    }

    padding: 0 1rem;
    
    
`

const ButtonCss = styled.button `
    padding: 0.3rem;
    font-size: 0.9rem;
    border-radius: .25rem;
    border: 0.2rem solid var(--lightGreen);
    color: var(--mainDark);
    background: var(--lightGreen);

    &:hover {
        background-color: var(--mainRed);
        border: 0.2rem solid var(--mainRed);
    }
`


export default NavBar;