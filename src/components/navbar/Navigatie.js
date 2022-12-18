import React from "react";
import { Link } from "react-router-dom";
function Nav() {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Reddit</Link></li>
                    <li><Link to="/Hottestpost">Hottestposts</Link></li>
                    <li><Link to="/Subreddit">Subreddit</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Nav