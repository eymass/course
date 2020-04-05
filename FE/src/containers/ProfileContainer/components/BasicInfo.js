import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    paper: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
}));

const BasicInfo = ({ user }) => {
    const classes = useStyles();
    return (<Paper classes={{root: classes.paper}}>
        <Avatar alt="Remy Sharp" className={classes.large} src={user.avatar} />
        <Typography component="h4" variant="h4">{user.name}</Typography>
        <Typography component="h5" variant="h5">{user.email}</Typography>
        <Typography component="h6" variant="h6">{user.phoneNumber}</Typography>
        <Typography component="h7" variant="h7">Joined At&#160; {user.joined}</Typography>
        </Paper>);
};

BasicInfo.propTypes = {
    user: PropTypes.object,
};

export default BasicInfo;
