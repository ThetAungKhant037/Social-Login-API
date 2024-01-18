// Terms.js

import React, { Component } from 'react';
import './terms.css';

class Terms extends Component {
    render() {
        return (
            <div className="home-container">
                <h1 className="home-title">Know Your Neighbourhood</h1>
                <p>Welcome to our website! This is the Terms and Conditions page.</p>
                <div className="container">
                    <h2>Terms and Conditions</h2>
                    <p>
                        Please read these terms and conditions carefully before using our website.
                        By accessing or using the website, you agree to be bound by these terms and conditions.
                    </p>
                    <h3>1. Acceptance of Terms</h3>
                    <p>
                        By using our website, you agree to comply with and be bound by these terms and conditions.
                        If you do not agree to these terms, please refrain from using our website.
                    </p>
                    <h3>2. Use of Content</h3>
                    <p>
                        The content on this website is for informational purposes only.
                        You may not reproduce, distribute, modify, or otherwise use the content without our written consent.
                    </p>
                    <h3>3. User Account</h3>
                    <p>
                        To access certain features of the website, you may be required to create a user account.
                        You are responsible for maintaining the confidentiality of your account information.
                    </p>
                    {/* Add more terms and conditions content as needed */}
                </div>
            </div>
        );
    }
}

export default Terms;
