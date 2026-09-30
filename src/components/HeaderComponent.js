
import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavbarToggler,
    Collapse,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {

        return (
            <div>

                <Navbar dark expand="md" className="main-navbar">

                    <div className="container">

                         <NavbarBrand href="/" className="restaurant-brand">

                            <span className="brand-name">CONFUSION</span>

                            <span className="brand-tagline">
                                Modern African Dining
                            </span>

                        </NavbarBrand>


                        <NavbarToggler onClick={this.toggleNav}/>


                        <Collapse
                            isOpen={this.state.isNavOpen}
                            navbar
                            className="main-navbar-collapse"
                        >

                            <Nav navbar className="main-nav">

                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        Home
                                    </NavLink>
                                </NavItem>


                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        Our Story
                                    </NavLink>
                                </NavItem>


                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        Menu
                                    </NavLink>
                                </NavItem>


                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        Contact
                                    </NavLink>
                                </NavItem>

                            </Nav>

                        </Collapse>

                    </div>

                </Navbar>

            </div>
        );
    }
}

export default Header;




