import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import BasicInfo from "./BasicInfo";
import OrdersHistory from "./OrdersHistory";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";

function Profile({ profile, getProfile, updateUserStatus }) {

    useEffect(() => {
        if(getProfile) {
            getProfile();
        }
    }, []);

    console.count("Profile");

    return (
        <Grid container direction="column" alignItems="center">
            <Chip  onClick={updateUserStatus} label={profile.status} style={{
                backgroundColor: profile.status === "active" ? "green" : "",
                color: profile.status === "active" ? "white" : ""
                 }} />
            <BasicInfo user={profile.user} />
            <OrdersHistory orders={profile.orders} />
        </Grid>
    );
}

Profile.propTypes = {
    user: PropTypes.object,
};

export default Profile;
