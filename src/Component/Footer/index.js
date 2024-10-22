import React, { useState, useEffect } from 'react';
import './index.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-head">
                <div className="foot-one">
                    <ul type="none">
                        <li>Quick Links</li>
                        <li><a href="#">Lab Feedback Form</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="foot-two">
                    <ul type="none">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="#">About RBU</a></li>
                    </ul>
                </div>
                <div className="foot-three">
                    Connect With US :
                    <ul type="none"><br />
                        <li>Email :- <a href="#">virtuallab2024@gmail.com</a></li>
                        <li>Contact :- <a href="#">9999999999</a></li>
                        <li>Address :- <a href="#">53G6+GCJ, Gittikhadan Rd,<br />BUPESHNAGAR, Nagpur, Maharashtra<br />440013</a></li>
                    </ul>
                </div>
            </div>
            <p>© 2024 Virtual Labs. All rights reserved.</p>
        </footer>
    );
};

export default Footer;