import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";
import Users from "./components/Users"; // Ensure this file exists!

const App = () => {
    return (
        <Router>
            <Navbar />
            <div>
                <h1>Social Media Dashboard</h1>
                <Users /> {/* Display users on the main page */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/top-users" element={<TopUsers />} />
                    <Route path="/trending" element={<TrendingPosts />} />
                    <Route path="/feed" element={<Feed />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
