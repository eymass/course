import React from 'react';
import Header from "./Header";

function UserPage({ authProvider = {}, logout }) {
    return <>
        <Header logout={logout} />
    <div>User Page</div>
    </>;
}

export default UserPage;
