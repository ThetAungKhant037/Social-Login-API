import React, { Component } from 'react';
import './contactus.css';

class Contactus extends Component {
    render() {
        return (
            <div className="home-container">
                <h1 className="home-title">Know Your Neighbourhood</h1>
                <p>Welcome to our website! This is the Contact Us page.</p>
                <br></br>
                <div className="container">
                    <h2>Contact Information</h2>
                    <p>
                        Thank you for your interest in Know Your Neighbourhood! If you have any questions, feedback,
                        or concerns, feel free to get in touch with us using the contact information provided below.
                    </p>

                    <h3>Email</h3>
                    <p>
                        General Inquiries: <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a>
                    </p>

                    <h3>Phone</h3>
                    <p>
                        Customer Support: (123) 456-7890
                    </p>

                    <h3>Address</h3>
                    <p>
                        Know Your Neighbourhood Headquarters<br />
                        123 Street, Cityville, State, 12345
                    </p>

                    <h2>Feedback Form</h2>
                    <p>
                        You can also reach out to us by filling out the form below. We appreciate your feedback and
                        will respond to your inquiries as soon as possible.
                    </p>
                    {/* Add your feedback form component or form HTML here */}
                </div>
            </div>
        );
    }
}

export default Contactus;
