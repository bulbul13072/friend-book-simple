import React from 'react';
import { prettyDOM } from '@testing-library/react';

const List = (props) => {
    const friendList = props.friendList;
    const totalIncome= friendList.reduce((total, name) => total + name.income, 0);
    return (
        <div>
            <h1>Added Friends: {friendList.length} </h1>
            <h3>Friend's Annual Income:${totalIncome} </h3>
        </div>
    );
};

export default List;