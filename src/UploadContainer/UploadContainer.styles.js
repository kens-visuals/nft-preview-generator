import styled from 'styled-components';

import { colors } from 'styleVariables';

export const UploadWrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  background-color: ${colors.tertiary};
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;

  @media (min-width: 810px) {
    max-width: 50rem;
    padding: 3rem;
  }
`;

export const UploadHeading = styled.span`
  color: ${colors.secondaryDark};
  font-size: 3rem;
`;

export const UploadImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1rem, 2vw, 3rem);
`;
