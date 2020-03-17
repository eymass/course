import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";
import Card from "@material-ui/core/Card";

const useStyles = padding => makeStyles(theme => ({
    loginCard: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    cardRoot: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding,
    }
}));

const RfCard = ({ children, padding }) => {

    const classes = useStyles(padding)();

    return (
        <Card
            classes={{ root: classes.cardRoot }}
            className={classes.loginCard}
        >
            {children}
        </Card>);
};

RfCard.propTypes = {
    children: PropTypes.object
};

export default RfCard;
