import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
    render() {
        return (
            <FooterCss>
                <div className="row footer-top mt-5">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                        <h5>Trebate pomoć?</h5>
                        <ul className="fa-ul">
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-caret-right"/>
                                </span>
                                <a className="footer-link" href="http://localhost:3000/Contact">Kontakt</a>
                            </li>
                            <li>
                            <span className="fa-li">
                                    <i className="fas fa-caret-right"/>
                                </span>
                                <a className="footer-link" href="http://localhost:3000/Contact">Česta pitanja</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                        <h5>Plaćanje i dostava</h5>
                        <ul className="fa-ul">
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-caret-right"/>
                                </span>
                                <a className="footer-link" href="http://localhost:3000/Contact">Kontakt</a>
                            </li>
                            <li>
                            <span className="fa-li">
                                    <i className="fas fa-caret-right"/>
                                </span>
                                <a className="footer-link" href="http://localhost:3000/Contact">Česta pitanja</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                        <h5>Upoznajte nas</h5>
                        <ul className="fa-ul">
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-caret-right"/>
                                </span>
                                <a className="footer-link" href="http://localhost:3000/Contact">Kontakt</a>
                            </li>
                            <li>
                            <span className="fa-li">
                                    <i className="fas fa-caret-right"/>
                                </span>
                                <a className="footer-link" href="http://localhost:3000/Contact">Česta pitanja</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3" style={{fontSize: '0.9rem'}}>
                        <h5>Kontakti</h5>
                        <span>
                            <i className="fas fa-map-marker-alt mr-2"/>
                            <span>OPG Sunjic</span>
                            <br/>Gizdavac, 21203 Donji Muć, Hrvatska
                        </span>
                        <br/>
                        <span>
                            <i className="fab fa-whatsapp mr-2"></i>
                            <span>+385 (0)98 222 333</span>
                        </span>
                    </div>
                    <div className="col-12" style={{
                        fontSize: '1.2rem',
                        color: 'var(--mainGreen)',
                        fontWeight: 'bold',
                        marginTop: '2rem'
                    }}>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center follow-us-footer">
                                <span className="follow-us-title align-items-center">Pratite nas </span>
                                <div className="social-network ml-5">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="fab fa-facebook-f"/>
                                    </a>
                                    <a href="https://www.youtube.com/?hl=hr&gl=HR" target="_blank">
                                        <i className="fab fa-youtube"/>
                                    </a>
                                    <a href="https://www.instagram.com/?hl=hr" target="_blank">
                                        <i className="fab fa-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer-bottom py-3 justify-content-center" style={{
                    backgroundColor: 'var(--mainGreen)',
                    fontSize: '0.8rem',
                    color: 'var(--mainWhite)',
                    textTransform: 'capitalize',
                    marginTop:'0.5rem',
                    
                }}>
                    <span>Copyright AG 2020</span>
                </div>
            </FooterCss>
            
        );
    }
}

const FooterCss = styled.footer `
    .social-network i {
        font-size: 1.2rem;
        color: var(--mainGreen);
        padding: 0 1rem;
    }

    .footer-top {
        margin-left: 0;
        margin-right: 0;
    }

    .footer-top h5 {
        border-bottom: 1px solid var(--mainGreen);
        color: var(--mainGreen);
        font-size: 1rem;
    }

    .footer-top a{
        color: var(--mainDark);
        font-size: 0.9rem;
    }

    .footer-top a:hover {
        color: var(--mainRed);
        text-decoration: none;
    }


    .social-network i:hover {
        color: var(--mainOrange);
    }
`
export default Footer;