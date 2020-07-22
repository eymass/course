import React, { useState, useRef, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import useInterval from './UseInterval'

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
}

const DynamicForm = ({ labels, isExtendedForm }) => {
    const [fields, setFields] = useState(labels)

    const [key, setKey] = useState('')

    
    const [fieldsElements, setFieldsElements] = useState(getFieldsElements(labels))
    
    const containerRef = useRef(null)
    
    const classes = useStyles();
    
    useEffect(() => {
        document.addEventListener('keydown', (event) =>{
            setKey(event.code)
        })
        document.addEventListener('keyup', (event) =>{
            setKey('')
        })
        return () => {
            document.removeEventListener('keydown')
            document.removeEventListener('keyup')
        }
    }, [])

    useEffect(() => {
        if (isExtendedForm || fields.length < 3){
            setFieldsElements(getFieldsElements(fields))
        } else {
            setFieldsElements(getFieldsElements(fields.slice(0, 3)))
        }
    }, [isExtendedForm, fields])

    const handleNewField = (_fields) => {
        setFields([..._fields, 'New Field'])
    }

    useInterval(() => {
        setFields([...fields, 'New Field'])
    }, 3000)

    return (
        <>
            <div ref={containerRef} className={classes.container}>
                {fieldsElements}
            </div>
            <div>
                {key}
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
