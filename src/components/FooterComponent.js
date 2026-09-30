import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="footer">

            <div className="container">

                <div className="row">
                    <div className="col-12 col-md-4 mb-4">

                        <h4 className="footer-brand"> CONFUSION</h4>

                        <p className="footer-tagline">Modern African Dining</p>

                        <p>
                            A contemporary celebration of African
                            flavours, culture and hospitality.
                        </p>

                    </div>

                    <div className="col-6 col-md-2 mb-4">

                        <h5>Explore</h5>

                        <ul className="list-unstyled footer-links">

                            <li>
                                <Link to="/home">Home</Link>
                            </li>

                            <li>
                                <Link to="/aboutus">Our Story</Link>
                            </li>

                            <li>
                                <Link to="/menu">Menu</Link>
                            </li>

                            <li>
                                <Link to="/contactus">Contact</Link>
                            </li>

                        </ul>

                    </div>

                    <div className="col-12 col-md-4 mb-4">

                        <h5>Find Us</h5>

                        <address>

                            <strong>Confusion</strong>
                            <br />

                            18 Baakens Valley Road
                            <br />

                            Central, Gqeberha
                            <br />

                            Eastern Cape, South Africa
                            <br /><br />

                            <i className="fa fa-phone fa-lg"></i>
                            {' '} +27 41 555 0186
                            <br />

                            <i className="fa fa-envelope fa-lg"></i>
                            {' '}
                            <a href="mailto:hello@confusion.co.za">
                                hello@confusion.co.za
                            </a>

                        </address>

                    </div>

                    <div className="col-12 col-md-2 mb-4">

                        <h5>Follow</h5>

                        <div className="footer-social">

                            <a href="#instagram" aria-label="Instagram">
                                <i className="fa fa-instagram"></i>
                            </a>

                            <a href="#facebook" aria-label="Facebook">
                                <i className="fa fa-facebook"></i>
                            </a>

                            <a href="#twitter" aria-label="Twitter">
                                <i className="fa fa-twitter"></i>
                            </a>

                        </div>

                    </div>

                </div>

                <div className="footer-bottom">

                    <div className="row align-items-center">

                        <div className="col-12 col-md-6">

                            <p className="mb-0">
                                © 2026 Confusion. All rights reserved.
                            </p>

                        </div>

                        <div className="col-12 col-md-6 text-md-right">

                            <p className="mb-0 footer-project-note">
                                A portfolio project inspired by a
                                Coursera learning project.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
