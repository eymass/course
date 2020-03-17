/**
 *
 * ErrorMessage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  height: ${props => props.messageHeight};
  margin-top: ${props => props.marginTop};
  color: #f34336;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.4px;
`;

function ErrorMessage({ error, messageHeight, marginTop }) {
  return (
    <Container messageHeight={messageHeight} marginTop={marginTop}>
      {error}
    </Container>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string,
  messageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ErrorMessage;
