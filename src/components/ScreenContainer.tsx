import React from 'react';
import styled from 'styled-components';

import bgImage from '../assets/images/forest_bg.jpg';

interface ScreenContainerProps {
  children: React.ReactNode;
}

const ScreenContainer = (props: ScreenContainerProps) => {
  const {children} = props;

  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  background: url(${bgImage});
  background-size: cover;
  background-position: center center;
  padding: 80px 60px 80px 60px;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export default ScreenContainer;
