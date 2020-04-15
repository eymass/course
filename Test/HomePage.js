import React from  'react';
import ReusableButton from "./ReusableComponents/ReusableButton";

const HomePage = ({ items, logoutDisabled }) => {
    return (<AppBar>
        <ReusableButton onClick={handleLogout}
                variant="contained"
                disabled={logoutDisabled}
                text={"Logout"}
                color="primary" />

    </AppBar>);
};
