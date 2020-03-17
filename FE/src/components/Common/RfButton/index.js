/**
 *
 * RfButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const ChildrenDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

/* eslint-disable react/prefer-stateless-function */
class RfButton extends React.PureComponent {
  render() {
    const { titleId, border, children, disabled, submit } = this.props;
    return (
      <Button
        border={border}
        disabled={disabled}
        onClick={submit || (() => {})}
        variant="contained"
        color="primary"
      >
        <ChildrenDiv>{children}</ChildrenDiv>

        {titleId}
      </Button>
    );
  }
}

RfButton.defaultProps = {
  border: '2px solid #fff',
  disabled: false,
};

RfButton.propTypes = {
  children: PropTypes.any,
  border: PropTypes.string,
  submit: PropTypes.func,
  disabled: PropTypes.bool,
  titleId: PropTypes.string,
};

export default RfButton;
