import React, { Component } from 'react';
import GoogleMap from './GoogleMap';

class Contact extends Component {
    render() {
        return (
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div className="row mt-5" style={{
                    width: '60vw',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}>
                    <h5 style={{
                        marginBottom: '30px',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                    }}>Kontaktirajte nas!
                    </h5>
                    <p style={{textAlign: 'center',}}><strong>Adresa: </strong>Gizdavac, 21203 Donji Muć, Hrvatska</p>
                    <p style={{textAlign: 'center',}}><strong>Mobilni: </strong>+385 (0)98 222333</p>
                    <p style={{textAlign: 'center',}}><strong>E-mail: </strong>info@opg-sunjic.com</p>

                </div>
          
                <div className="row my-4" style={{
                    width: '60vw',
                    height: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    border: '3px solid var(--mainGrey)',
                    
                }}>
                    <GoogleMap />
                </div>
            </div>
            
        );
    }
}

export default Contact;