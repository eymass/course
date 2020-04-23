import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Vacation from "./Vacation";

const VacationsItems = ({ vacations, handleVacationOnClick }) => {
    console.count("VacationsItems");
    return (
        vacations.map(vacation => (
                <Vacation handleVacationOnClick={handleVacationOnClick} vacation={vacation} />))
    );
};

VacationsItems.propTypes = {
    vacations: PropTypes.array,
    handleVacationOnClick: PropTypes.func,
};

export default memo(VacationsItems);
