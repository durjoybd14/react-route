import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const { friendId } = useParams();   //use params used for read route parameter
    const [friends, setFriends] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriends(data))
    }, []);
    const { name, phone, email } = friends;

    return (
        <div>
            <h1>Its friend details: {friendId}</h1>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default FriendDetails;