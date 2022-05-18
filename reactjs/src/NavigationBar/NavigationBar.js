import React from "react";
import "./NavigationBar.css";

import {BrowserRouter as Routes, NavLink} from "react-router-dom";

class NavigationBar extends React.Component {
    constructor(props) {
        super (props);
    }

    render () {
        return (
            <div className="navbar-container">
                    <NavLink to='/topstories' className="nav-link">
                            <i class="fa-solid fa-globe"></i>Top Stories
                    </NavLink>
                    <NavLink to='/topics/business' className="nav-link">
                        <i class="fa-solid fa-business-time"></i>Business
                    </NavLink>
                    <NavLink to='/topics/entertainment' className="nav-link">
                        <i class="fa-solid fa-film"></i>Entertainment
                    </NavLink>
                    <NavLink to='/topics/technology' className="nav-link">
                        <i class="fa-solid fa-microchip"></i>Technology
                    </NavLink>
                    <NavLink to='/topics/sports' className="nav-link">
                        <i class="fa-solid fa-person-biking"></i>Sports
                    </NavLink>
            </div>
        );
    }
}

export default NavigationBar;