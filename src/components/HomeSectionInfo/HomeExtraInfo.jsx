import React from "react";
import "./HomeExtraInfo.css"; // Importing CSS file for styles

const WhyChooseUs = () => {
    return (
        <section className="whychooseus-section">
            <h1 className="whychooseus-title">
                <span className="highlight">Why</span> Choose Us?
            </h1>
            <div className="whychooseus-container">
                <p>
                    At Harvest Quotient, we’re not just a farm—we’re a vision for the 
                    future of sustainable agriculture. Our livestock, including cows, sheep, 
                    goats, and chickens, play a vital role in fostering healthier communities 
                    and a thriving ecosystem. From providing fresh milk and eggs to local stores 
                    to offering livestock for personal farming needs, we ensure every aspect of 
                    our work supports both people and the planet.

                </p>

                <p>
                    Looking ahead, we aim to expand our impact by adopting innovative farming 
                    techniques that maximize efficiency and sustainability. We plan to invest 
                    in advanced livestock care and eco-friendly practices that enhance the quality 
                    of our products while minimizing our environmental footprint. By choosing 
                    Harvest Quotient, you’re supporting a farm dedicated to feeding families, 
                    empowering individuals, and shaping a better future for agriculture.
                </p>

            </div>
        </section>
    );
};

export default WhyChooseUs;