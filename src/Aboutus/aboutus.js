// Aboutus.js

import React, { Component } from 'react';
import './aboutus.css';

class Aboutus extends Component {
    render() {
        return (
            <div className="home-container">
                <h1 className="home-title">Know Your Neighbourhood</h1>
                <p>Welcome to our website! This is the About Us page.</p>
                <div className="container">
                    <h2>Our Mission</h2>
                    <p>
                        At Know Your Neighbourhood, our mission is to provide a platform that fosters
                        community engagement, connectivity, and awareness. We aim to bring people together
                        and empower them with information about their local neighborhoods.
                    </p>

                    <h2>Who We Are</h2>
                    <p>
                        Know Your Neighbourhood is a team of dedicated individuals passionate about
                        building strong and connected communities. We believe that by knowing more
                        about your neighborhood, you can contribute to creating a positive and vibrant
                        living environment.
                    </p>

                    <h2>What We Offer</h2>
                    <p>
                        Our platform offers features such as local event listings, neighborhood news,
                        and a community forum. We strive to provide valuable and relevant information
                        to help residents stay informed and engaged with what's happening around them.
                    </p>

                    {/* Add more about us content as needed */}
                </div>
            </div>
        );
    }
}

export default Aboutus;
