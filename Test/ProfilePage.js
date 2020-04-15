import React from 'react';
import ReusableButton from "./ReusableComponents/ReusableButton";

const ProfilePage = ({ user, handleEdit, editDisabled }) => {
    return (<Container>
        <ReusableButton
            onClick={handleEdit}
            disabled={editDisabled}
            variant="contained"
            text={"Edit Profile"}
            color="secondary" />
    </Container>);
};























ReusableButton()
ProfilePage()
HomePage()
