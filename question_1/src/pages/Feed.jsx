import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";


const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/feed")
            .then(response => setPosts(response.data))
            .catch(error => console.error("Error fetching feed:", error));
    }, []);

    return (
        <div>
            <h2>Live Feed</h2>
            {posts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
    );
};

export default Feed;
