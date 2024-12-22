import React from "react";
import "./HomeAboutInfo.css"; // Importing CSS file for styles
import image from "../../../public/images/multiple-cows.jpg"; // Adjust the path to your image

const About = () => {
    return (
        <section className="about-section">
            <div className="content">
                <h1>
                    <span className="highlight">About</span> Harvest Quotient
                </h1>
                <p>
                    Welcome to Harvest Quotient, where we bring agriculture closer to the community. 
                    Specializing in livestock such as cows, sheep, goats, and chickens, our farm is 
                    dedicated to providing fresh, high-quality products that nourish both people and the 
                    land. From nutrient-rich milk delivered to local stores to farm-fresh eggs, we ensure 
                    that every product meets the highest standards of quality and sustainability.
                </p>

                <p>
                    At Harvest Quotient, we go beyond supplying stores—we offer livestock for purchase, 
                    empowering individuals to meet their personal farming needs. Rooted in a passion for 
                    agriculture and a commitment to community, we aim to enrich lives, foster growth, and 
                    contribute meaningfully to the world of farming.
                </p>

            </div>
            <div className="image-container">
                <img src={image} alt="Cow" />

            </div>
        </section>
    );
};

export default About;