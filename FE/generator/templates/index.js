import React from 'react';
import { connect } from 'react-redux';
import CONT_CAMEL_NAME from './components/CONT_NAME';

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

const CONT_CONTAINER_NAME = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CONT_CAMEL_NAME);

export default CONT_CONTAINER_NAME;
