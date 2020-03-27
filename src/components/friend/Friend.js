import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Friend.css';

const friend = (props) => {
    const {name, address, email, gender, income, last_name} = props.friend;
    return (
        <div className="friend">
            <div className="img-div">
                <img src={props.friend.photo} alt="profile_picture"/>
            </div>
            <div>
                <h1>Name: {name+" "+last_name}</h1>
                <p>Address: {address}</p>
                <p>Email: {email}</p>
                <p>Annual Income: $ {income}</p>
                <p>Gender: {gender}</p>
                <button className="add-btn" id="btn" onClick={() =>props.handleAddfriend(props.friend)}><FontAwesomeIcon icon={faPlus} /> Add Friend</button>
            </div>
        </div>
    );
};

export default friend;

