import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import DiscountsItems from "./DiscountsItems";

const useStyles = makeStyles({
    paper: {
        width: 500,
        height: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        margin: '15px'
    },
});

const Discounts = ({ vacations, updateShowDiscounts }) => {

    const classes = useStyles();

    return (
        <>
            <Typography variant="h6" component="h6">Discounts</Typography>
            <Switch
                checked={vacations.showDiscounts}
                onChange={updateShowDiscounts}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            {vacations.showDiscounts ?
                <DiscountsItems vacations={vacations} />
            :
                <Paper classes={{ root: classes.paper }} > Discounts are hidden</Paper>}
        </>
    );
};

Discounts.propTypes = {
    updateShowDiscounts: PropTypes.func,
    vacations: PropTypes.object,
};

export default Discounts;
