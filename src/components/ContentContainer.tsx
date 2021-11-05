import React from 'react';
import styled from 'styled-components';

import BgImage from '../assets/images/paper_bg.jpg';

interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer = (props: ContentContainerProps) => {
  const {children} = props;

  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  background: url(${BgImage});
  max-width: 900px;
  width: 100%;
  padding: 50px 20px 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin-top: 200px;
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default ContentContainer;
