import React from 'react';
import PropTypes from 'prop-types';
import Vacation from "./Vacation";

const VacationsItems = ({ vacations }) => {
    return (
        vacations.vacations.map(vacation => (
                <Vacation vacation={vacation} />))
    );
};

VacationsItems.propTypes = {
    vacations: PropTypes.array,
};

export default VacationsItems;
