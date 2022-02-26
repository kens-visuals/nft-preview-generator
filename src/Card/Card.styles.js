import styled from 'styled-components';

import { colors } from 'styleVariables';

export const Box = styled.div`
  width: 100%;
  max-width: 30rem;
  background-color: ${colors.tertiary};
  border-radius: 1rem;
  margin-top: 2rem;
  padding: 2rem;
`;

export const NftContainer = styled.div`
  width: 100%;
  height: 26rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserWrapper = styled.div`
  width: 100%;
  border-top: 0.1rem solid ${colors.primaryLight};
  margin-top: 2rem;
  padding-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserImgContainer = styled.div`
  width: 3.5rem;
  aspect-ratio: 1;
`;

export const UserImg = styled(Img)`
  border: 0.1rem solid ${colors.secondaryLight};
  border-radius: 50%;
`;

export const UserName = styled.span`
  color: ${colors.secondaryLight};
  font-size: 1.4rem;
`;

export const UserNameSpan = styled.span`
  color: ${colors.secondaryDark};
`;

export const InfoWrapper = styled.div`
  margin: 2rem 0;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h2`
  color: ${colors.secondaryLight};
  font-size: 2rem;
`;

export const Desc = styled.p`
  color: ${colors.secondary};
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Icon = styled.img`
  width: 1rem;
`;

export const Price = styled.span`
  color: ${colors.cyan};
`;
