import styled from 'styled-components';
import { colors } from 'styleVariables';

export const Title = styled.h1`
  color: ${colors.secondaryDark};
  font-size: 3.2rem;
  text-align: center;
  margin-block: 2rem;
`;

export const MainBox = styled.div`
  width: 90%;
  max-width: 90rem;
  background-color: ${colors.primaryDark};
  border-radius: 1rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
