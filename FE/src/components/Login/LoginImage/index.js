/**
 *
 * LoginImage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Parent = styled.div`
  position: relative;
`;

const Slogan = styled.div`
  height: fit-content;
  font-size: 10px;
  color: #fff;
  margin-top: 10px;
  letter-spacing: 0.1px;
`;

const CenterContent = styled.div`
  position: absolute;
  top: 127px;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 10px;
  color: #fff;
`;

function LoginImage({ background, logo }) {
  return (
    <div>
      <Parent>
        <img alt="LOGIN" src={background} />
        <CenterContent>
          <img alt="LOGIN" src={logo} />
          <Slogan>
            WELCOME
          </Slogan>
        </CenterContent>
      </Parent>
    </div>
  );
}

LoginImage.propTypes = {
  logo: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default LoginImage;
