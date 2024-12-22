import React from "react";
import "./Footer.css"; // Importing CSS file for styles
import image from "../../../public/images/logo-removebg-preview.png"; // Adjust the path to your image

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Dynamically get the current year

    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={image} alt="Logo" className="footer-photo" />
                <div className="footer-developer">
                <p className="copyright">
                    © {currentYear} Harvest Quotient. All rights reserved.
                </p>
                    <p>Developed by <a href="https://www.erencedevelopers.co.za" target="_blank" rel="noopener noreferrer">Erence Developers</a></p>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;
