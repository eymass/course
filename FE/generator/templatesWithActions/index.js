import { connect } from 'react-redux';
import CONT_CAMEL_NAME from './components/CONT_NAME';
import {getCONT_CAMEL_NAME} from "./meta/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    getCONT_CAMEL_NAME,
});

const CONT_CONTAINER_NAME = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CONT_CAMEL_NAME);

export default CONT_CONTAINER_NAME;
