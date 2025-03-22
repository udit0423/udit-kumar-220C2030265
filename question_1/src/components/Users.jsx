import React, { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://20.244.56.144/test/users") 
            .then(response => response.json())
            .then(data => {
                if (data.users) {
                    // Convert object values to an array
                    setUsers(Object.values(data.users));
                }
            })
            .catch(error => console.error("Error fetching users:", error));
    }, []);

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
