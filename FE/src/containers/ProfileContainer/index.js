import { connect } from 'react-redux';
import Profile from './components/Profile';
import {getProfile} from "./meta/actions";
import {selectUser, selectOrders} from "./meta/selectors";

const mapStateToProps = state => ({
    user: selectUser(state),
    orders: selectOrders(state),
});

const mapDispatchToProps = ({
    getProfile,
});

const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);

export default ProfileContainer;
