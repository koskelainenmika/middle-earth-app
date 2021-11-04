import React from 'react';
import styled from 'styled-components';

import BgImage from '../assets/images/paper_bg.jpg';

interface ScreenContainerProps {
  children: React.ReactNode;
}

const ScreenContainer = (props: ScreenContainerProps) => {
  const {children} = props;

  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  background: url(${BgImage});
  background-size: cover;
  padding: 50px 20px 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

export default ScreenContainer;
