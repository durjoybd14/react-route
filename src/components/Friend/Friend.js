import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend;

    const history = useHistory();
    const handleClick = (friendId)=>{
        const url = `/friend/${friendId}`;
        history.push(url)
    }
    
    const friendStyle = {
        border: '1px solid red',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h1>Name: {name}</h1>
            <h3>Email: {email}</h3>
            {/* <p><Link to={`/friend/${id}`}>Show the details of id: </Link>{id}</p> */}
            {/* <Link to={`/friend/${id}`}><button>Show the details of id-{id}</button></Link> */}
            <button onClick={()=>handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Friend;