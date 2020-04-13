import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import { logout } from 'containers/AuthContainer/meta/actions';
import {getUser} from "containers/AuthContainer/meta/selectors";
import {updateThemeMode} from "containers/App/meta/actions";
import {selectIsAuthenticated} from "containers/AuthContainer/meta/selectors";

const mapStateToProps = (state) => ({
    routes: [
        {
            key: 'vacations',
            path: '/',
            text: 'Vacations' },
        {
            key: 'profile',
            path: '/profile',
            text: 'Profile' }
        ],
    user: getUser(state),
    isAuthenticated: selectIsAuthenticated(state),
});

const mapDispatchToProps = ({
    logout,
    updateThemeMode,
});

const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);

export default NavigationContainer;
