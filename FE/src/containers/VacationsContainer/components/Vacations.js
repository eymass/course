import React, {useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";
import Discounts from "./Discounts";
import VacationsItems from "./VacationsItems";


const useStyles = makeStyles({
    vacationsRoot: {
        display: 'grid',
        gridColumnGap: '10px',
        gridRowGap: '15px',
        gridTemplateColumns: '2fr 2fr 2fr',
    },
});

function Vacations({ getVacations, updateShowDiscounts, vacations, discounts, showDiscounts, selectedVacation, updateSelectedVacation }) {

    useEffect(() => {
        if (getVacations) {
            getVacations()
        }
    }, []);

    const classes = useStyles();

    const handleVacationOnClick = useCallback((vacationId) => updateSelectedVacation(vacationId), []);

    console.count("Vacations");

    return (
        <>
            <Discounts updateShowDiscounts={updateShowDiscounts} discounts={discounts} showDiscounts={showDiscounts} />
            <div className={classes.vacationsRoot}>
                <VacationsItems handleVacationOnClick={handleVacationOnClick} vacations={vacations} />
            </div>
        </>
    );
}

Vacations.propTypes = {
    getVacations: PropTypes.func,
    updateShowDiscounts: PropTypes.func,
    vacations: PropTypes.array,
    showDiscounts: PropTypes.bool,
    discounts: PropTypes.array,
    selectedVacation: PropTypes.string,
};

export default Vacations;
