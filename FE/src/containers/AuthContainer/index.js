import { connect } from 'react-redux';
import Auth from './components/Auth';
import {getAuth} from "./meta/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    getAuth,
});

const AuthContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Auth);

export default AuthContainer;
