import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import AddListItem from "./AddListItem";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

const itemsData = [{text: 'line 1'}, {text: 'line 2'}, {text: 'line 3'}];

export default function InteractiveList() {
    const classes = useStyles();

    const [items, setItems] = useState(itemsData);

    const addItemToFirst = () => {
        const newItems = [{text: 'line 4'}, ...items];
        setItems(newItems);
    };

    return (
        <div className={classes.root}>
            <Fab onClick={addItemToFirst} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <Grid item xs={12} md={6}>
                <List dense={true}>
                    {items.map(item => (<AddListItem text={item.text} />))}
                </List>
            </Grid>
        </div>
    );
}
