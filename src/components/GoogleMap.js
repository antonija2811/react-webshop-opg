import React, { Component } from 'react';

class GoogleMap extends Component {
    render() {
        return (
            <React.Fragment>
                <iframe
                    title="OPG-Sunjic"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.052243543305!2d16.431843415407112!3d43.52210326891613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355de6cfe8d42f%3A0xcf32f759a19e60fa!2sPut+Supavla+1%2C+21000%2C+Split!5e0!3m2!1sen!2shr!4v1565805538774!5m2!1sen!2shr"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    allowFullScreen
                />
            </React.Fragment>
                
            
        );
    }
}

export default GoogleMap;