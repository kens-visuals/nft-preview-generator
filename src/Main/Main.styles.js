import styled from 'styled-components';
import { colors } from 'styleVariables';

export const MainBox = styled.main`
  width: 90%;
  max-width: 100rem;
  background-color: ${colors.primaryDark};
  border-radius: 1rem;
  margin: 5rem 0;
  padding: 2rem;
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: center;
  justify-items: center;

  @media (min-width: 810px) {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }

  @media (min-width: 1140px) {
    padding: 4rem;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  }
`;

export const Title = styled.h1`
  color: ${colors.secondaryDark};
  font-size: 3.2rem;
  text-align: center;
  margin-bottom: 2rem;
  grid-column: 1 / -1;
`;
