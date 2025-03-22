import React, { useEffect, useState } from "react";
import axios from "axios";

const TopUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/top-users")
            .then(response => setUsers(response.data))
            .catch(error => console.error("Error fetching top users:", error));
    }, []);

    return (
        <div>
            <h2>Top Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.posts} Posts</li>
                ))}
            </ul>
        </div>
    );
};

export default TopUsers;
