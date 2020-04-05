import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";
import Vacation from "./Vacation";

const useStyles = makeStyles({
    vacationsRoot: {
        display: 'grid',
        gridColumnGap: '10px',
        gridRowGap: '15px',
        gridTemplateColumns: '2fr 2fr 2fr',
    },
});

function Vacations({ getVacations, vacations }) {

    const [items, setItems] = React.useState([]);

    useEffect(() => {
        if (getVacations) {
            getVacations()
        }
    }, []);

    useEffect(() => {
        const vacationsElements = vacations.map(vacation => (
            <Vacation vacation={vacation} />)
        );
        setItems(vacationsElements)
    }, [vacations]);

    const classes = useStyles();

    return <div className={classes.vacationsRoot}>
        {items}
    </div>;
}

Vacations.propTypes = {
    getVacations: PropTypes.func,
    vacations: PropTypes.array,
};

export default Vacations;
