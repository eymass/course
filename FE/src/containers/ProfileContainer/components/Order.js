import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 140,
    },
});

function Order({ order }) {
    const classes = useStyles();
    console.count("Order");
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    className={classes.media}
                    src={order.image}
                    title={order.description}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {order.amount}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {order.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

Order.propTypes = {
    order: PropTypes.object
};

export default Order;
