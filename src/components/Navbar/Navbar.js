import React from "react";
// CSS
import "./Navbar.css"
// Icons
import apple from "../../assets/icons/Apple.png";
import search from "../../assets/icons/Search.png";
import bag from "../../assets/icons/Bag.png";

const Navbar = () => {

    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="select-bar">
                    <div className="menu-icon">
                        <img src={apple} alt="Apple" />
                    </div>
                    <div className="menu-label">
                        Store
                    </div>
                    <div className="menu-label">
                        Mac
                    </div>
                    <div className="menu-label">
                        iPad
                    </div>
                    <div className="menu-label">
                        iPhone
                    </div>
                    <div className="menu-label">
                        Watch
                    </div>
                    <div className="menu-label">
                        AirPods
                    </div>
                    <div className="menu-label">
                        TV & Home
                    </div>
                    <div className="menu-label">
                        Only on Apple
                    </div>
                    <div className="menu-label">
                        Accessories
                    </div>
                    <div className="menu-label">
                        Support
                    </div>
                    <div className="menu-icon">
                        <img src={search} alt="Search" />
                    </div>
                    <div className="menu-icon">
                        <img src={bag} alt="Bag" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
