import { connect } from 'react-redux';
import Vacations from './components/Vacations';
import {getVacations, updateShowDiscounts} from "./meta/actions";
import {makeSelectVacations, selectDiscounts, selectShowDiscounts} from "./meta/selectors";

const mapStateToProps = state => ({
    vacations: makeSelectVacations(state),
    discounts: selectDiscounts(state),
    showDiscounts: selectShowDiscounts(state),
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
