/**
 *
 * PageWrapper
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable prefer-template */
const Wrapper = styled.div`
  padding-top: ${props => props.marginTop};
  text-align: ${props => props.textAlign};
  position: relative;
  margin-left: ${props =>
    props.marginLeftRight ? props.marginLeftRight : 'auto'};
  margin-right: ${props =>
    props.marginLeftRight ? props.marginLeftRight : 'auto'};
  padding-left: ${props =>
    props.paddingLeftRight ? props.paddingLeftRight : 'auto'};
  padding-right: ${props =>
    props.paddingLeftRight ? props.paddingLeftRight : 'auto'};
  min-height: 85vh;
  width: 100%;
  overflow-y: ${props => (props.overflowY ? props.overflowY : 'auto')};
  height: ${props => (props.height ? props.height : '100%')};
  background-size: cover;
  padding-top: ${props => (props.disableTopPadding ? 0 : props.marginTop)};
  margin-bottom: 80px;
`;

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
const PageWrapper = ({
  textAlign,
  children,
  marginTop,
  disableBackground,
  paddingLeftRight,
  disableTopPadding,
  overflowY,
  height,
}) => (
  <Wrapper
    height={height}
    textAlign={textAlign}
    marginTop={marginTop}
    disableBackground={disableBackground}
    paddingLeftRight={paddingLeftRight}
    disableTopPadding={disableTopPadding}
    overflowY={overflowY}
  >
    {children}
  </Wrapper>
);

export default PageWrapper;
