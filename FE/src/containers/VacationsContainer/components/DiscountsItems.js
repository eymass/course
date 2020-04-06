import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const DiscountsItems = ({ vacations }) => {

    const [selected, setSelected] = useState('');

    return (
        <Paper variant="outlined">
            <List component="nav" aria-label="secondary mailbox folders">
                {vacations.discounts.map(vac => <ListItem onClick={() => setSelected(vac.id)} button selected={vac.id === selected}>
                    <ListItemText primary={`${vac.destination} 15% OFF`} />
                </ListItem>)}
            </List>
        </Paper>
    );
};

DiscountsItems.propTypes = {
    vacations: PropTypes.object,
};

export default DiscountsItems;
