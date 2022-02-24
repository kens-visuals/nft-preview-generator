import styled from 'styled-components';

import { colors } from 'styleVariables';

export const CardBox = styled.div`
  width: 100%;
  max-width: 30rem;
  background-color: ${colors.tertiary};
  border-radius: 1rem;
  margin-top: 2rem;
  padding: 2rem;
`;

export const CardNftContainer = styled.div`
  width: 100%;
  height: 26rem;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardUserWrapper = styled.div`
  width: 100%;
  border-top: 0.1rem solid ${colors.primaryLight};
  margin-top: 2rem;
  padding-top: 1.5rem;
`;

export const CardUserImgContainer = styled.div`
  width: 3.5rem;
  aspect-ratio: 1;
`;

export const CardUserImg = styled(CardImg)`
  border: 0.1rem solid ${colors.secondaryLight};
  border-radius: 50%;
`;

export const CardUserName = styled.span`
  color: ${colors.secondaryDark};
`;
