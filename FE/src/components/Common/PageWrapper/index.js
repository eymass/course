/**
 *
 * PageWrapper
 *
 */

import React from 'react';
import styled from 'styled-components';

/* eslint-disable prefer-template */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
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
