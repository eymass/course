import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { useParams } from 'react-router-dom';

function VacationDetails({ vacation, dispatchGetVacationDetails }) {

    const { id } = useParams();

    useEffect(() => {
        dispatchGetVacationDetails(id);
    }, []);

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    src={vacation.image}
                    title={vacation.description}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {vacation.destination}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {vacation.price}$
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

VacationDetails.defaultProps = {
    vacation: {}
};

VacationDetails.propTypes = {
    vacation: PropTypes.object
};

export default VacationDetails;
