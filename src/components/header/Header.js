import '../../App.css'
import {Home} from "../../pages/home/Home";
import { HottestPosts } from "../../pages/Hottest-posts";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "../../components/navbar/Navigatie";
import { Subreddit } from "../../pages/subreddit/subreddit";
import Logo from "../../assets/logo.png"
export function Header() {
    return (
        <>
            <div className="Header">
                <nav className="navigatie">
            <Router>
                <Nav></Nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hottestpost" element={<HottestPosts />} />
                    <Route path="/subreddit/:subredditId" element={<Subreddit />}  />
                </Routes>
            </Router>
            </nav>
                <div className="logo">
                <img src={Logo} alt='reddit-logo'/>
                <h1>Reddit</h1>
                </div>
            </div>
        </>

    );
}