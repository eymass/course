import { connect } from 'react-redux';
import Vacations from './components/Vacations';
import {getVacations, updateShowDiscounts} from "./meta/actions";
import {select} from "./meta/selectors";

const mapStateToProps = state => ({
    vacations: select(state)
});

const mapDispatchToProps = ({
    getVacations,
    updateShowDiscounts,
});

const VacationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Vacations);

export default VacationsContainer;
