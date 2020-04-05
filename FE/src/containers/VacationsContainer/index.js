import { connect } from 'react-redux';
import Vacations from './components/Vacations';
import {getVacations} from "./meta/actions";
import {selectVacations} from "./meta/selectors";

const mapStateToProps = state => ({
    vacations: selectVacations(state)
});

const mapDispatchToProps = ({
    getVacations,
});

const VacationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Vacations);

export default VacationsContainer;
