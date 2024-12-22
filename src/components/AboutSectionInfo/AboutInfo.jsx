import React from "react";
import "./AboutInfo.css"; // CSS file for styling

const AboutInfo = () => {
    return (
        <div className="layout-container">
            <div className="text-section">
                <h2>
                    Welcome to <span className="highlight">Harvest Quotient,</span> where we strive to make it happen. 
                </h2>
                <br/>
                <p>
                    a farm that blends traditional agricultural values with 
                    modern sustainability practices. Nestled in the heart 
                    of fertile land, our farm is home to a wide variety of 
                    livestock, including cows, sheep, goats, and chickens. 
                    These animals form the foundation of our work, allowing 
                    us to produce fresh, nutrient-rich milk and eggs that 
                    reach local stores and homes. We take pride in delivering 
                    high-quality products that nourish families while 
                    supporting the agricultural economy.
                </p>
                <br/>
                <p>
                    Our commitment extends beyond providing essential 
                    food products. At Harvest Quotient, we understand 
                    the growing demand for personal farming and 
                    self-sufficiency. That’s why we offer livestock 
                    sales to individuals, enabling them to start or 
                    expand their own agricultural ventures. Whether 
                    you’re looking for cows for dairy production, 
                    sheep and goats for grazing, or chickens for 
                    egg-laying, our livestock is raised with care 
                    to ensure optimal health and productivity.
                </p>
                <br/>
                <p>
                  As we look toward the future, Harvest Quotient is 
                  dedicated to adopting sustainable farming practices 
                  that reduce our environmental footprint while 
                  maximizing productivity. From implementing efficient 
                  water usage systems to enhancing animal welfare 
                  through ethical care, we aim to lead by example 
                  in the farming community. Our goal is to innovate 
                  while preserving the natural balance of our 
                  ecosystem, ensuring a thriving agricultural 
                  future for generations to come.
                </p>
                <br/>
                <p>
                    At the core of our mission is a commitment 
                    to building strong connections with the 
                    community. We believe that agriculture is 
                    not just about feeding people—it’s about 
                    creating opportunities, fostering growth, 
                    and empowering individuals to live sustainably. 
                    By choosing Harvest Quotient, you’re supporting 
                    a farm that values integrity, innovation, and 
                    the shared vision of a healthier, more 
                    sustainable world.
                </p>
            </div>
            <div className="image-section">
                <img src="../../../public/images/sheep.jpg" alt="Group 1" className="image top" />
                <img src="../../../public/images/farm-house.jpg" alt="Group 2" className="image bottom" />
            </div>
        </div>
    );
};

export default AboutInfo;
