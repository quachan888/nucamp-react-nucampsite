import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/directory">Directory</Link>
                            </li>
                            <li>
                                <Link to="/aboutus">About</Link>
                            </li>
                            <li>
                                <Link to="/contactus">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a href="http://instagram.com/" className="btn btn-social-icon btn-instagram">
                            <i className="fa fa-instagram" />
                        </a>{" "}
                        <a href="http://www.facebook.com/" className="btn btn-social-icon btn-facebook">
                            <i className="fa fa-facebook" />
                        </a>{" "}
                        <a href="http://twitter.com/" className="btn btn-social-icon btn-twitter">
                            <i className="fa fa-twitter" />
                        </a>{" "}
                        <a href="http://youtube.com/" className="btn btn-social-icon btn-google">
                            <i className="fa fa-youtube" />
                        </a>{" "}
                    </div>

                    <div className="col-sm-4 text-center">
                        <a href="tel:+2065551234" className="btn btn-link" role="button">
                            <i className="fa fa-phone" /> 1-206-555-1234
                        </a>
                        <a href="mailto:quachan888@gmail.com" className="btn btn-link">
                            <i className="fa fa-envelope-o" /> campsite@nucamp.co
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
