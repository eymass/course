import React, { useState, useRef, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import useInterval from './useInterval';

const useStyles = makeStyles({
    container: {
        display: 'grid',
        gridColumnGap: '10px',
        gridRowGap: '15px',
        gridTemplateColumns: '2fr 2fr 2fr',
        margin: '30px',
    },
});

const getFieldsElements = (_fields) => {
    return _fields.map(field => <TextField
        id={field}
        label={field}
        variant="outlined"
        color="secondary"
    />)
};

const DynamicForm = ({ labels, isExtendedForm }) => {

    const [fields, setFields] = useState(labels);

    const [key, setKey] = useState('');

    const [fieldsElements, setFieldsElements] = useState(getFieldsElements(labels));

    const containerRef = useRef(null);

    const classes = useStyles();

    useEffect(() => {
        const root = document.getElementById('root');
        root.addEventListener('keyup', (e) =>  {
            setKey(e.code);
        });
        return () => {
            const root = document.getElementById('root');
            root.removeEventListener('keyup');
        };

    }, []);

    useInterval(() => {
        setFields([...fields, 'New Field']);
    }, 3000);

    useEffect(() => {
        if (isExtendedForm || fields.length < 3) {
            setFieldsElements(getFieldsElements(fields));
        } else {
            setFieldsElements(getFieldsElements(fields.slice(0,3)));
        }
    }, [isExtendedForm, fields]);

    const handleNewField = (_fields) => {
        setFields([..._fields, 'New Field']);
    };

    return (
        <>
            <div ref={containerRef} className={classes.container}>
                {fieldsElements}
                <div>{key}</div>
            </div>
            <Fab onClick={() => handleNewField(fields)} color="secondary" aria-label="add">
                <AddIcon />
            </Fab>
        </>
    );
};

DynamicForm.propTypes = {
    labels: PropTypes.array,
};

export default DynamicForm;
