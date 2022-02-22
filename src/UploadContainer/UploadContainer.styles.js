import styled from 'styled-components';

import { colors } from '../styleVariables';

const Wrapper = styled.div`
  width: 90%;
  background-color: ${colors['tertiary']};
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
`;

const SecondaryHeading = styled.h2`
  color: ${colors['secondary--dark']};
  font-size: 3rem;
`;

const ImagesWrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
`;

export { Wrapper, SecondaryHeading, ImagesWrapper };
