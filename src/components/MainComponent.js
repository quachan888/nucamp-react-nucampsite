import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Directory from "./DirectoryComponent";
import { CAMPSITES } from "../shared/campsites.js";
import CampsiteInfo from "./CampsiteInfoComponent";
import Header from "./Headercomponents";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
        };
    }

    render() {
        const HomePage = () => {
            return <Home />;
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/directory" render={() => <Directory campsites={this.state.campsites} />} />
                    <Route
                        exact
                        path="/aboutus"
                        render={() => (
                            <div className="container">
                                <h1>About Us</h1>
                            </div>
                        )}
                    />
                    <Route
                        exact
                        path="/contactus"
                        render={() => (
                            <div className="container">
                                <h1>Contact Us</h1>
                            </div>
                        )}
                    />
                    <Redirect to="/home" />
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default Main;
