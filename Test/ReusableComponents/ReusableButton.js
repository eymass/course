import React, {useState} from 'react';
import PropTypes from 'prop-types';

const ReusableButton = ({ onClick, variant, disabled, color, text }) => {
    return (<Button onClick={onClick}
                    variant={variant}
                    styles={{ borderRadius: disabled ? '8px' : '10px', border: '1px solid red' }}
                    color={color}>
        {text}
    </Button>);
};

ReusableButton.propTypes = {
    onClick: PropTypes.func,
    variant: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string,
    disabled: PropTypes.bool,
};

export default ReusableButton;
