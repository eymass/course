import { connect } from 'react-redux';
import VacationDetails from './components/VacationDetails';
import {getVacationDetails} from "./meta/actions";
import {selectVacation} from "./meta/selectors";

const mapStateToProps = state => ({
    vacation: selectVacation(state),
});

const mapDispatchToProps = dispatch => ({
    dispatchGetVacationDetails: id => dispatch(getVacationDetails(id)),
});

const VacationDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(VacationDetails);

export default VacationDetailsContainer;
