import { connect } from 'react-redux';
import Navigation from './components/Navigation';

const mapStateToProps = state => ({
    routes: [{ key: 'home', path: 'home', text: 'Home' }, { key: 'vacations', path: 'vacations', text: 'Vacations' }]
});

const mapDispatchToProps = {};

const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);

export default NavigationContainer;
