import React, { useState } from 'react';
import fakeData from '../../fakeData/index';
import './Friends.css';
import Friend from './../friend/Friend';
import List from '../List/List';

const Friends = () => {
const first15 = fakeData.slice(0, 15);
const [frnd, setFrnd] = useState(first15);
const [friendList, setFriend] = useState([]);

const handleAddfriend = (friend) => {
    const newfriendlist = [...friendList, friend];
    setFriend(newfriendlist);
}

    return (
        <div className="whole">
            <div className="friends">
                {
                    frnd.map(bondhu => <Friend
                         friend={bondhu}
                         handleAddfriend={handleAddfriend}
                         ></Friend>)
                }
            </div>

            <div className="added-friends">
                <List friendList={friendList}></List>
            </div>
        </div>
    );
};

export default Friends;