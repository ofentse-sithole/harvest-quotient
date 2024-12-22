import React from "react";
import "./HomeServiceInfo.css"; // Importing CSS file for styles

const Services = () => {
    return (
        <section className="services-section">

            <div className="our-services">
                <h2>Our Services</h2>
                <p>At Harvest Quotient, we take pride in offering a diverse range of services to cater to both individual and commercial needs:</p>
            </div>

            <div className="services-grid">
                <div className="service-item">
                    <h3>Fresh Milk Supply</h3>
                    <p>High-quality milk from our well-nurtured cows, delivered to local stores for families to enjoy.</p>
                </div>

                <div className="service-item">
                    <h3>Farm-Fresh Eggs</h3>
                    <p>Nutritious eggs from free-range chickens, ensuring freshness and quality in every carton.</p>
                </div>

                <div className="service-item">
                    <h3>Livestock Sales</h3>
                    <p>Healthy cows, sheep, goats, and chickens available for purchase to support personal farming or agricultural ventures.</p>
                </div>

                <div className="service-item">
                    <h3>Sustainable Farming Practices </h3>
                    <p>Dedicated to eco-friendly techniques that prioritize the health of our animals, the land, and the community</p>
                </div>

                <div className="service-item">
                    <h3>Community Support</h3>
                    <p>Partnering with local businesses and markets to strengthen the agricultural economy and provide affordable, accessible products.</p>
                </div>

            </div>
        </section>
    );
}

export default Services;