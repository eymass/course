import { connect } from 'react-redux';
import Profile from './components/Profile';
import {getProfile, updateUserStatus} from "./meta/actions";
import {selectProfile} from "./meta/selectors";

const mapStateToProps = state => ({
    profile: selectProfile(state),
});

const mapDispatchToProps = ({
    getProfile,
    updateUserStatus,
});

const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);

export default ProfileContainer;
