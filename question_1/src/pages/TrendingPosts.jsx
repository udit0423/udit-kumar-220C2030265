import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

const TrendingPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/trending")
            .then(response => setPosts(response.data))
            .catch(error => console.error("Error fetching trending posts:", error));
    }, []);

    return (
        <div>
            <h2>Trending Posts</h2>
            {posts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
    );
};

export default TrendingPosts;
