import styled from 'styled-components';
import { colors } from 'styleVariables';

export const MainBox = styled.main`
  width: 90%;
  max-width: 90rem;
  background-color: ${colors.primaryDark};
  border-radius: 1rem;
  margin: 5rem 0;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${colors.secondaryDark};
  font-size: 3.2rem;
  text-align: center;
  margin-bottom: 2rem;
`;
