import styled from 'styled-components';

import { colors } from '../styleVariables';

export const UploadWrapper = styled.div`
  width: 100%;
  background-color: ${colors.tertiary};
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
`;

export const UploadHeading = styled.span`
  color: ${colors.secondaryDark};
  font-size: 3rem;
`;

export const UploadImagesWrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
