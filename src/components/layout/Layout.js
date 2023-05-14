import React from "react";
import {Link} from "react-router-dom";

class Layout extends React.Component{
    render() {
        return (
            <div className="navbar-block">
                <div className="logo-block">
                    <h1 className="title-main"> &lt; FERNANDO TUYO /&gt; </h1>
                </div>
                <div className="link-block">
                    <ul>
                        <li><a href="/#"><Link to="about">about</Link></a></li>
                        <li><a href="/#"><Link to="portfolio">Projects</Link></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Layout;