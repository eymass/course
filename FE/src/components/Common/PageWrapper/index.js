/**
 *
 * PageWrapper
 *
 */

import React from 'react';
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
  overflow-y: ${props => (props.overflowY ? props.overflowY : 'auto')};
  background-size: cover;
  margin-bottom: 80px;
  padding: ${props => props.padding};
`;

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
const PageWrapper = ({
  textAlign,
  children,
  marginTop,
  disableBackground,
  paddingLeftRight,
  padding,
  disableTopPadding,
  overflowY,
  height,
}) => (
  <Wrapper
    height={height}
    padding={padding}
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
