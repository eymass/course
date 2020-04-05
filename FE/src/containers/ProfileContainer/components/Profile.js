import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import BasicInfo from "./BasicInfo";
import OrdersHistory from "./OrdersHistory";

function Profile({ user, orders, getProfile }) {

    useEffect(() => {
        if(getProfile) {
            getProfile();
        }
    }, []);

    return <div >
        <BasicInfo user={user} />
        <OrdersHistory orders={orders} />
    </div>;
}

Profile.propTypes = {
    user: PropTypes.object,
};

export default Profile;
